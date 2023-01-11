class BlogController < ApplicationController

    def index
        render json:Blog.all
    end

    def show
        puts params[:id]
        b = Blog.exists?(params[:id])
        if b
        v = Blog.find(params[:id])
        render json:v
        else
        render html:"Data not found"     
       end
    end 

end
