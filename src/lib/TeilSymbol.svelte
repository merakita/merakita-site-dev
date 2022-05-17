<script>

export let teil = 'B';

const getColor = (teil) => {
    return  (teil == 'A') ? "#616A71" : 
            (teil == 'B') ? "#808C83" :
            (teil == 'C') ? "#D3BB93" :
            (teil == 'D') ? "#B99D8E" :
            (teil == 'E') ? "#AA555B" : "#000"
}


</script> 


<svg class='teil-symbol' viewBox="0 0 100 100">
    <g class="teil-symbol-g">
        <circle class="teil-symbol-circle" cx="50" cy="50" r="50" fill={getColor(teil)}/>
        <text class="teil-symbol-text" x="50%" y="50%" text-anchor="middle" 
        stroke-width="1px" dy=".36em" font-size="3.5em" font-weight="800">{teil}</text>
    </g>
</svg>


<style>
    .teil-symbol {
        height: 40px;
    }

    .teil-symbol-g {

    }

    .teil-symbol-text {
        stroke: #fff;
        fill:  #fff;
    }

</style>

