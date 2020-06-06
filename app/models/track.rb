# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  aws_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Track < ApplicationRecord
  validates :title, :aws_url, presence: true

  has_one_attached :track

  def track_params
    params.require(:track).permit(:title, :aws_url)
  end
end
