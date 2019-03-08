window.onload = function () {
  
}

async function GetDevices () {
  try {
    let device = await navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    let server = await device.gatt.connect()
    let service = await server.getPrimaryService('battery_servive')
    let characterisitc = await service.getCharacteristic('battery_level')
    let value = characterisitc.readValue()


    console.log(device, server, service, characterisitc, value)

    console.log('battery percentage is ' + value.getUnit8(0))
  }
  catch (e) {
    console.error(e)
  }
}