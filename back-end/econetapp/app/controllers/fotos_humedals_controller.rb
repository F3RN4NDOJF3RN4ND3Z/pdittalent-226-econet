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
        render :json => @foto.to_json
    end

    def index
        @fotos=FotosHumedal.all
        render :json => @fotos.to_json
    end

    private 
    def fotos_param
        params.require(:foto).permit(:url_imagen, :esPrincipal, :humedal_id)
    end

end
