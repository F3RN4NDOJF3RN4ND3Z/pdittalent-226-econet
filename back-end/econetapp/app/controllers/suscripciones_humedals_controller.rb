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
        render :json => {:suscripcion=>@suscripcion}
    end

    def index
        if params[:humedal_id].present?
            @suscripciones=SuscripcionesHumedal.where(humedal_id: params[:humedal_id])
        elsif params[:usuario_id].present?
            @suscripciones=SuscripcionesHumedal.where(usuario_id: params[:usuario_id])
        else
            @suscripciones=SuscripcionesHumedal.all
        end

        
        render :json => {:suscripciones => @suscripciones}
    end

    private
    def suscripcion_params
        params.require(:suscripcion).permit(:usuario_id, :humedal_id)
    end
end
