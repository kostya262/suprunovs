<div class="docs bg-blue" id="docs">
    <div class="container">
        <h2 class="title title-orange">Санитарно-эпидемилоги­чес­кие заключения</h2>
        <div class="docs-list list" id="docs_slider">
            @for ($i = 1; $i <= 5; $i++)
                <div class="docs-item">
                    <img src="/images/docs-{{$i}}.jpg" alt="Документ {{$i}}">
                </div>
            @endfor
        </div>
    </div>
</div>
