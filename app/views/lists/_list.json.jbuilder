json.(list, :id, :title, :board_id, :rank, :created_at, :updated_at)

json.cards(cards) do |card|
  json.partial!("cards/card", :card => card)
end