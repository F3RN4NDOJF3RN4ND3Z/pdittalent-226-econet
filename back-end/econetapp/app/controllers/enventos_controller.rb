class EnventosController < ApplicationController
    def create
        @evento=Evento.new(eventos_params)
        if @evento.save
            render: json=>@evento.to_json
        else
            renter: json=>{:errors=>@evento.errors.full_messages}
        end
    end

    def show
        @evento=Evento.find(params[:id])
        render: json=>@evento.to_json
    end

    def index
        @eventos=Evento.all
        render: json=>@eventos.to_json
    end

    private
    def eventos_params
        params.required(:evento).permit(:descripcion, :organizador, :url_imagen, :horario, :contacto_id, :humedal_id )
    end

end
