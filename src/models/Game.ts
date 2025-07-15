class Game {
  id: number
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string

  constructor(game: Game) {
    this.id = game.id
    this.category = game.category
    this.description = game.description
    this.image = game.image
    this.infos = game.infos
    this.system = game.system
    this.title = game.title
  }
}

export default Game
