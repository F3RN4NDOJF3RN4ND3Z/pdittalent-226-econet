class DenunciasController < ApplicationController
    def create
        @denuncia=Denuncia.new(param_denuncia)
        if @denuncia.save
            render :json=>@denuncia.to_json
        else
            render :json=>{:errors=>@denuncia.errors.full_messages}
        end
    end

    def show
        @denuncia=Denuncia.find(params[:id])
        render :json=>{:denuncia=>@denuncia}
    end
    
    def index
        if params[:humedals_id].present?
            @denuncias=Denuncia.where(humedals_id: params[:humedals_id])
        else
            #@denuncias=Denuncia.all
            Denuncia.joins(:usuario).find_each do |denuncia|
            hash={}
            @usuario=denuncia.usuario()
            hash=["denuncia"=>denuncia,"usuario"=>@usuario]
            @denuncias << hash

        end
        
        render :json=> {:denuncias=>@denuncias}
    end

    private
    def param_denuncia
        params.require(:denuncia).permit(:observaciones, :estado, :humedals_id, :usuarios_id)
    end
end
