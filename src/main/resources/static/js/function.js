function addPoint() {
    let unitsEle = document.getElementsByClassName("points")[0];
    let unit_clone = document.getElementsByClassName("extract-point")[0].cloneNode(true);
    unitsEle.appendChild(unit_clone);
}

function removePoint(self) {
    self.parentNode.parentNode.parentNode.removeChild(self.parentNode.parentNode);
}

function preSave() {
    let extract_points = document.getElementsByClassName("extract-point");
    let points = [];
    for (let i = 0; i < extract_points.length; i++) {
        let point = document.getElementsByClassName("extract-point")[i];
        let name = point.getElementsByClassName("name")[0].value;
        let selector = point.getElementsByClassName("selector")[0].value;
        let attrName = point.getElementsByClassName("attrName")[0].value;
        var pointJson = {
            name: name,
            selector: selector,
            attrName: attrName
        };
        points[i] = pointJson;
    }

    var extractUnit = {
        points: points
    };
    let unit = document.getElementsByClassName("extractUnit")[0];
    unit.value = JSON.stringify(extractUnit);

}