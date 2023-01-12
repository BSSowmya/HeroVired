class PropertyController < ApplicationController
    skip_before_action :verify_authenticity_token


    def index
        render json:Property.all
    end

    def show 
        v =Property.find(params[:id])
        render json:v
    end
    def create
        puts params[:propname]
        puts params[:city]

        v = !params[:propname].empty?
        if (v)
            p =  Property.create('propname': params[:propname],'city': params[:city],'country': params[:country],'address': params[:address],'typeofres': params[:typeofres],'price': params[:price],'desc': params[:desc],'rules': params[:rules],'rating': params[:rating])
            puts p
            render json: "Data Added"
        else
            render json: "Data not added" 
        end
    end

    def update
        p = Property.find(params[:id].to_i)
        p.update('propname': params[:propname],'city': params[:city],'country': params[:country],'address': params[:address],'typeofres': params[:typeofres],'price': params[:price],'desc': params[:desc],'rules': params[:rules],'rating': params[:rating])
        render json: "Data Updated"
    end  
       
    def destroy
        p = Property.find(params[:id].to_i)
        p.destroy
        render json: "Data Deleted"
    end
   
end
