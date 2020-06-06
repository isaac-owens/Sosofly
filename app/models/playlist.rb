# == Schema Information
#
# Table name: playlists
#
#  id          :bigint           not null, primary key
#  creator_id  :integer          not null
#  genre_id    :integer
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Playlist < ApplicationRecord
  validates :creator_id, :title, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :added_tracks
  
  has_many :tracks, 
    through: :added_tracks

  def playlist_params
    params.require(:playlist).permit(:title, :creator_id, tracks: [])
  end
end
