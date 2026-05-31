var grafico04 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v6.json",
    "data": {
        "url": "https://raw.githubusercontent.com/wendellandrey7-afk/trabalho-do-csv/refs/heads/main/dados-desigualdade-racial-br-01.csv"
    },
    "mark": {
        "type": "line",
        "point": true
    },
    "width": 500,
    "encoding": {
        "x": {
            "field": "ano",
            "type": "ordinal",
            "title": "Ano",
            "axis": {"labelAngle": 0}
        },
        "y": {
            "field": "%_desocupacao",
            "aggregate": "mean",
            "type": "quantitative",
            "title": "Média da Taxa de Desocupação (%)"
        },
        "color": {
            "field": "etnia",
            "type": "nominal",
            "title": "Etnia"
        },
        "tooltip": [
            {
                "field": "ano",
                "type": "ordinal",
                "title": "Ano"
            },
            {
                "field": "etnia",
                "type": "nominal",
                "title": "Etnia"
            },
            {
                "field": "%_desocupacao",
                "aggregate": "mean",
                "type": "quantitative",
                "title": "Taxa Média de Desocupação (%)"
            }
        ]
    }
};

vegaEmbed('#grafico04', grafico04);