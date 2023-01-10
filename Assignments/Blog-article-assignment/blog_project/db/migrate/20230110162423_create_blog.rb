class CreateBlog < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :blogtittle
      t.string :blogarticle
      t.string :blogimg
      t.timestamps
    end
  end
end
