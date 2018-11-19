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
        render :json=>@denuncia.to_json
    end
    
    def index
        @denuncias=Denuncia.all
        render :json=>@denuncias.to_json
    end

    private
    def param_denuncia
        params.require(:denuncia).permit(:observaciones, :estado, :humedals_id, :usuarios_id)
    end
end
