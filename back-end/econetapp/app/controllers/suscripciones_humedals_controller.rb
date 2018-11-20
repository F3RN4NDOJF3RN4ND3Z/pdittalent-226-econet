class SuscripcionesHumedalsController < ApplicationController
    def create
        @suscripcion=SuscripcionesHumedal.new(suscripcion_params)
        if @suscripcion.save
            render :json => @suscripcion.to_json 
        else
            render :json => {:errors => @suscripcion.errors.full_messages}
        end
    end

    def show
        @suscripcion=SuscripcionesHumedal.find(params[:id])
        render :json => @suscripcion.to_json
    end

    def index
        @suscripciones=SuscripcionesHumedal.all
        render :json => @suscripciones.to_json
    end

    private
    def suscripcion_params
        params.require(:suscripcion).permit(:usuario_id, :humedal_id)
    end
end
