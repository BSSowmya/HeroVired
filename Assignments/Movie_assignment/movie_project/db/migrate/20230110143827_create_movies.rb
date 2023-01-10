class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :moviename
      t.string :moviedesc
      t.string :moviedir
      t.string :movielang

      t.timestamps
    end
  end
end
