class EventosController < ApplicationController
    def create
        @evento=Evento.new(eventos_params)
        if @evento.save
            render :json => @evento.to_json
        else
            render :json => { :errors => @evento.errors.full_messages }
        end
    end

    def show
        @evento=Evento.find(params[:id])
        render :json => @evento.to_json
    end

    def index
        @eventos=Evento.all
        render :json => @eventos.to_json
    end

    private
    def eventos_params
        params.require(:evento).permit(:descripcion, :url_imagen, :organizador, :horario, :contacto_id, :humedal_id)
    end
end
