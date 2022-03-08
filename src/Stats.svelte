<script>
    import { chart } from "svelte-apexcharts";

    export let stats;
    let options;
    $:console.log(stats)
    $:if(stats) {
        options = {
            chart: {
            type: "bar",
            },
            series: [
            {
                name: "Stats",
                data: [stats.HP, stats.Attack, stats.Defense, stats.SpAtk, stats.SpDef, stats.Speed],
            },
            ],
            xaxis: {
            categories: ["HP", "Attack", "Defense", "SpAtk", "SpDef", "Speed"],
            },
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


<div use:chart={options} />