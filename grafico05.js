var grafico05 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v6.json",
    "data": {
        "url": "https://raw.githubusercontent.com/wendellandrey7-afk/trabalho-do-csv/refs/heads/main/dados-desigualdade-racial-br-01.csv"
    },
    "mark": "bar",
    "width": 80,
    "encoding": {
        "x": {
            "field": "etnia",
            "type": "nominal",
            "axis": null
        },
        "y": {
            "field": "%_desocupacao",
            "aggregate": "mean",
            "type": "quantitative",
            "title": "Média de Desocupação (%)"
        },
        "color": {
            "field": "etnia",
            "type": "nominal"
        },
        "column": {
            "field": "regiao",
            "type": "nominal",
            "title": "Regiões do Brasil"
        },
        "tooltip": [
            {
                "field": "regiao",
                "type": "nominal",
                "title": "Região"
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
                "title": "Média de Desocupação (%)"
            }
        ]
    }
};

vegaEmbed('#grafico05', grafico05);