@extends('layouts.public')

@section('content')
    <div class="hero-wrapper" id="index">
        <div class="hero">
            <div class="hero-container container container-sm">
                <div class="hero-content">
                    <h1 class="hero-title">
                        Всего несколько кликов,<br>
                        и у вас будет потрясающая улыбка…
                    </h1>
                    <p class="hero-description">
                        Для этого в клинике применяются самые современные материалы и технологии, которые позволяют
                        достичь
                        качества и эстетического результата
                    </p>
                    <button class="hero-button btn">
                        Записаться
                    </button>
                </div>
            </div>
        </div>
    </div>
    <section class="block">
        @include('components.doctors')
    </section>
    <section class="block">
        @include('components.rules')
    </section>
    <section class="block">
        @include('components.docs')
    </section>
    <section class="block">
        @include('components.price')
    </section>
    <section class="block">
        @include('components.license')
    </section>
    <section class="block">
        @include('components.about')
    </section>
    <section class="block">
        @include('components.feedback')
    </section>
    <section class="block">
        @include('components.phones')
    </section>
    <section class="block">
        @include('components.form')
    </section>
    <div id="yandexmap">
        <iframe
            src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=false&amp;um=constructor%3ALkzYyUSe1J-hNifKaHjgLKRaNcnXBdAT"
            frameborder="0" allowfullscreen="true" width="100%" height="400px" style="display: block;"></iframe>
    </div>
@endsection
