class UsuariosController < ApplicationController
    def create
        @usuario=Usuario.new(usuario_params)
        if @usuario.save
            render :json => @usuario.to_json
        else
            render :json => {:errors => @contacto.errors.full_messages}
        end
    end

    def show
        @usuario=Usuario.find(params[:id])
        render :json => @usuario.to_json
    end

    def index
        @usuarios=Usuario.all
        render :json => @usuarios.to_json
    end

    private
    def usuario_params
        params.require(:usuario).permit(:nombre,:email,:url_imagen)
    end

end
