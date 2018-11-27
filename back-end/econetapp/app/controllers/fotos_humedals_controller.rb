class FotosHumedalsController < ApplicationController
    def create
        @foto=FotosHumedal.new(fotos_param)
        if @foto.save
            render :json => @foto.to_json
        else
            render :json => {:errors=>@foto.errors.full_messages}
        end
    end

    def show
        @foto=FotosHumedal.find(params[:id])
        render :json =>{:foto => @foto}
    end

    def index
        if  params[:humedal_id].present?
            @fotos=FotosHumedal.where(humedal_id: params[:humedal_id])
        else
            @fotos=FotosHumedal.all
        end
        
        render :json => {:fotos => @fotos}
    end

    private 
    def fotos_param
        params.require(:foto).permit(:url_imagen, :esPrincipal, :humedal_id)
    end

end
