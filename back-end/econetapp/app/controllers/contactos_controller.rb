class ContactosController < ApplicationController
    def create
        @contacto = Contacto.new(contacto_params)
        if @contacto.save
            render :json => @contacto.to_json
        else
            render :json => { :errors => @contacto.errors.full_messages }
        end
    end

    def show
        @contacto=Contacto.find(params[:id])
        render :json => @contacto.to_json
    end

    def index
        @contactos=Contacto.all
        render :json => @contactos.to_json
    end

    private
    def contacto_params 
        params.require(:contacto).permit(:nombre, :telefono, :email)
    end
end
