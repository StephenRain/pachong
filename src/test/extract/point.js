var points = {
    "points": [
        {
            "selector": "#utopia_widget_7 > div.demand-list > div:nth-child(1) > div.demand-card-body > div.demand-card-title-box > div > span.demand-title.undefined > a",
            "name": "title"
        }
    ]
};

var points2 = [
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(1) > div.demand-card-body > div.demand-card-title-box > div > span.demand-title.undefined > a",
    },
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(${1-39}) > div.demand-card-body > div.demand-card-title-box > div > span.demand-title.demand-title-long > a",
    },
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(25) > div.demand-card-body > div.demand-price",
    },
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(26) > div.demand-card-body > div.demand-price",
    },
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(1) > div.demand-card-body > div.demand-price",
    },
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(30) > div.demand-card-body > div.demand-price",
    },
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(4) > div.demand-card-body > div.demand-card-title-box > div > span.demand-title.demand-title-long > a",
    },
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(4) > div.demand-card-body > div.demand-card-title-box > div > span.demand-title.demand-title-long > a",
    },
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(4) > div.demand-card-body > div.demand-card-title-box > div > span.demand-title.demand-title-long > a",
    },
    {
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(30) > div.demand-card-body > div.demand-card-title-box > div > span.demand-title.demand-title-long > a",
    }
];
var x = {
    "points": [{
        "name": "标题",
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(${1-30}) > div.demand-card-body > div.demand-card-title-box > div > span.demand-title.undefined > a",
        "labelType": "0",
        "attrName": ""
    }, {
        "name": "价格",
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(${1-30}) > div.demand-card-body > div.demand-price",
        "labelType": "0",
        "attrName": ""
    }, {
        "name": "描述",
        "selector": "#utopia_widget_6 > div.demand-list > div:nth-child(${1-30}) > div.demand-card-body > div.demand-card-desc",
        "labelType": "0",
        "attrName": ""
    }]


};

var x = "body > div > div.user-container.pc-container > div.display-zone > div.note-wrapper > div > div > div:nth-child(${1-3}}) > div:nth-child(${1-4}}) > div.note-info > div > div > div > img";
var b = "body > div > div.user-container.pc-container > div.display-zone > div.note-wrapper > div > div > div:nth-child(2) > div:nth-child(1) > div.note-info > div > div > div > img";
var e = "body > div > div.user-container.pc-container > div.display-zone > div.note-wrapper > div > div > div:nth-child(4) > div:nth-child(3) > div.note-info > div > div > div > img";
var f = "body > div > div.user-container.pc-container > div.display-zone > div.note-wrapper > div > div > div:nth-child(3) > div:nth-child(3) > div.note-info > div > div > div > img";
var lk = "body > div > div.user-container.pc-container > div.display-zone > div.note-wrapper > div > div > div:nth-child(3) > div:nth-child(2) > div.note-info > div > div > div > img";


function t() {
    var n = Array.prototype.slice.call(arguments);
    try {
        o && "function" == typeof o && o.apply(this, arguments);
        var t = n.map(function (t) {
            return qa(t, r)
        });
        return e.handleEvent ? e.handleEvent.apply(this, t) : e.apply(this, t)
    } catch (e) {
        throw Ba += 1, setTimeout(function () {
            --Ba
        }), qi(function (t) {
            t.addEventProcessor(function (t) {
                var e = y({}, t);
                return r.mechanism && (To(e, void 0, void 0), Io(e, r.mechanism)), e.extra = y({}, e.extra, {
                    arguments: n
                }), e
            }), Bi(e)
        }), e
    }
}