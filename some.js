let key = 'd6109a921ad8b4db9eb42ea743a3d0c6';
let request = {
    "apiKey": key,
    "modelName": "Address",
    "calledMethod": "getWarehouses",
    "methodProperties": {
        "CityName" : "Київ",
        "CityRef" : "00000000-0000-0000-0000-000000000000",
        "Page" : "1",
        "Limit" : "50",
        "Language" : "UA",
        "TypeOfWarehouseRef" : "00000000-0000-0000-0000-000000000000",
        "WarehouseId" : "151"
    }
}
fetch('https://api.novaposhta.ua/v2.0/json/', request)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
