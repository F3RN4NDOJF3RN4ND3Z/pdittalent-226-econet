class HumedalsController < ApplicationController
    def create
        @humedal = Humedal.new(params_humedal)
        if @humedal.save
            render :json => @humedal.to_json
        else
            render :json => { :errors => @humedal.errors.full_messages }
        end

    end

    def show
        @humedal=Humedal.find(params[:id])
        render :json => {:humedal => @humedal}
    end

    def index
        #@humedales=Humedal.all
        @humedales=[]
        Humedal.joins(:fotos_humedals,:contacto).find_each do |humedal|
            hash={}
            @fotos=[]
            @fotos=humedal.fotos_humedals()
            @foto_princial=@fotos.select{|foto| foto.esPrincipal?}
            @contacto=humedal.contacto()
            @denuncias=humedal.denuncias()
            @eventos=humedal.eventos()
            hash=["humedal"=>humedal,"fotos"=>@fotos,"foto_principal"=>@foto_princial,"contacto"=>@contacto,"denuncias"=>@denuncias,"eventos"=>@eventos]
            @humedales << hash
        end

        render :json => {:humedales=> @humedales}
    end

    private
    def params_humedal
        params.require(:humedal).permit(:nombre, :direccion, :ubicacion, :descripcion, :horario_atencion, :contacto_id)
    end
end
