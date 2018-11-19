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
        render :json => @humedal.to_json
    end

    def index
        @humedales=Humedal.all
        render :json => @humedales.to_json
    end

    private
    def params_humedal
        params.require(:humedal).permit(:nombre, :direccion, :ubicacion, :descripcion, :horario_atencion, :contacto_id)
    end
end
