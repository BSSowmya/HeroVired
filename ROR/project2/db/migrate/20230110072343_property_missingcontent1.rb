class PropertyMissingcontent1 < ActiveRecord::Migration[7.0]
  def change
    add_column:properties,:typeofres,:string
    add_column:properties,:price,:float
    add_column:properties,:desc,:string
    add_column:properties,:rules,:string
    add_column:properties,:rating,:string
  end
end
