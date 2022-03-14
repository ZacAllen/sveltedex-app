<script>
    import { chart } from "svelte-apexcharts";

    export let stats;
    let options;
    $:if(stats) {
        options = {
            plotOptions: {
                bar: {
                    distributed: true
                }
            },
            chart: {
            type: "bar",
            fontFamily: 'var(--mainFont)'
            },
            colors: [
                "#f75757", "#f79757", "#c4c14b", "#577ff7", "#57f757", "#ffacac" 
            ],
            series: [
            {
                name: "Count",
                data: [stats.HP, stats.Attack, stats.Defense, stats.SpAtk, stats.SpDef, stats.Speed],
            },
            ],
            legend: {
                show: false
            },
            xaxis: {
                categories: ["HP", "Attack", "Defense", "Sp.Atk", "Sp.Def", "Speed"],
            },
            yaxis: {
                max:200,
            }
        };
    }
    
</script>

<div class="statsContainer">
    <div use:chart={options} />
</div>
