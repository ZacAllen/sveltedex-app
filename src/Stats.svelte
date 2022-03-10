<script>
    import { chart } from "svelte-apexcharts";

    export let stats;
    let options;
    $:console.log(stats)
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
    
    
  
// let options = {
//     chart: {
//       type: "bar",
//     },
//     series: [
//       {
//         name: "sales",
//         data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//       },
//     ],
//     xaxis: {
//       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//     },
//   };
</script>

<div class="statsContainer">
    <div use:chart={options} />
</div>
