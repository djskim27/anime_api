class Api::CharactersController < ApplicationController
    def index
      @characters = Character.all 
      render json: @characters
    end

    def show
      @character = Character.find(params[:id])
      render json: @character
    end

    def create 
      @character = Character.new (character_params)

      if @character.save 
        render json: @character
      else
        render json: {
            message: 'Error when creating Character'
        }
      end
    end

    def update
        @character = Character.find params[:id]
  
        if @character.update(character_params)
          render json: @character
        else
          render json: {
            message: 'Error when updating Character'
          }
        end
    end

    def destroy
      @character = Character.find params[:id]
      @character.destroy

      render json: {
          message: 'Character successfully destroyed'
      }
    end

    private

    def character_params
        params.require(:character).permit(:name, :anime, :image, :special_move)
    end
end
