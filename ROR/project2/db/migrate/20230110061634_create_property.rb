class CreateProperty < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :propname
      t.timestamps
    end
  end
end
