export default class DistrictRepository {
  constructor(data) {
    this.data = this.mappedData(data)
    // console.log(this.data)
  }


  sanitizedData(data) {
    if (typeof data === 'number') {
      return Math.round(data * 1000) / 1000
    } else {
      return 0
    }
  }

  mappedData(data) {
    let newData = {}

    data.forEach(val => {
      let { Location, TimeFrame, Data } = val
      let sanitizedData = this.sanitizedData(Data)
      Data = parseFloat(Data).toFixed(3)*1

      if(!newData[Location]) {
        newData[Location] = {}
        newData[Location].location = Location
        newData[Location].data = {}
      }
        newData[Location].data[TimeFrame] = sanitizedData
    })
    return newData
  }

  findByName(name) {
    if(!name) {
      return undefined
    }
    let school = Object.keys(this.data).find(specificLocation => {
      if (name.toLowerCase() === specificLocation.toLowerCase()) {
        return this.data[specificLocation]
      }
    })

    return this.data[school];
  }

  findAllMatches(input = null) {
    const districtKeys = Object.keys(this.data);
    let searchedKeys = []

      districtKeys.forEach((key) => {
        if(input == null){
          searchedKeys.push(this.data[key])
        }
        else if(key.toLowerCase().includes(input.toLowerCase())) {
         searchedKeys.push(this.data[key])
        }
      })
      return searchedKeys
  }

  findAverage(location) {
    const selectedDistrict = this.findByName(location)
    const yearsList = Object.keys(selectedDistrict.data);
    const sumOfData = yearsList.reduce((acc, year) => {
      return acc + selectedDistrict.data[year];
    }, 0);
    const average = sumOfData / yearsList.length
    return Math.round(average * 1000) / 1000;
  }

  compareDistrictAverages(district1, district2) {
    const firstAverage = this.findAverage(district1);
    const secondAverage = this.findAverage(district2);
    const compareAverages = firstAverage < secondAverage ? Math.round((firstAverage / secondAverage) * 1000) / 1000 : Math.round((secondAverage / firstAverage) * 1000 / 1000);
    return {[district1.toUpperCase()]: firstAverage, [district2.toUpperCase()]: secondAverage, 'compared': compareAverages}
  }


}
