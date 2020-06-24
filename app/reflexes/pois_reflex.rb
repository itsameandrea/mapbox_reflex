class PoisReflex < ApplicationReflex
  def add(name)
    Poi.create(name: name)
  end
end
