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
        render :json => {:evento => @evento}
    end

    def index
        if params[:humedal_id].present?
            @eventos=Evento.where(humedal_id: params[:humedal_id])
        else
            @eventos=Evento.all
        end
        
        render :json => {:eventos => @eventos}
    end

    private
    def eventos_params
        params.require(:evento).permit(:descripcion, :url_imagen, :organizador, :horario, :contacto_id, :humedal_id)
    end
end
