import {ServicesCombinations} from '../services/services-combinations.js'

export class ControllerTopCombinations {
  static async handle (req, res) {
    try {
      // Access Services to get topCombinations
      const combinations = new ServicesCombinations()
      const topsCombinationsOfStore = await combinations.getStoreTopCombinantions()
      return res.status(200).json(topsCombinationsOfStore)

    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
}


