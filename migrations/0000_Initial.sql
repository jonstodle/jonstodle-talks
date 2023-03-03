-- Migration number: 0000 	 2023-03-03T22:13:19.782Z

create table talks
(
    id           integer primary key autoincrement,
    title        text not null,
    presented_at date not null,
    slides       text,
    video        text,
    code         text
);

insert into talks (title, presented_at, slides, video, code)
values ('Getting Started with Svelte - Cybernetically Enhanced Web Apps', '2020-05-01',
        'https://drive.google.com/file/d/15L1vvQFSvl1Zhmr4SLI_kWmJTe0Jh3Wa/view?usp=sharing',
        'https://youtu.be/eK27uMco3UI', null),
       ('Let''s Go! En praktisk innføring i Go(lang)', '2022-11-19', null, null,
        'https://github.com/jonstodle/lets-go'),
       ('Svelte – Bedre for utvikleren og raskere for brukeren', '2022-04-30', null, null,
        'https://github.com/jonstodle/svelte-todo'),
       ('Svelte – Bedre for utvikleren og raskere for brukeren, eller just another javascript framework?', '2021-11-11',
        null, null, 'https://github.com/jonstodle/svelte-todo'),
       ('Getting Started with Svelte - Cybernetically Enhanced Web Apps', '2020-05-01',
        'https://drive.google.com/file/d/15L1vvQFSvl1Zhmr4SLI_kWmJTe0Jh3Wa/view?usp=sharing',
        'https://youtu.be/eK27uMco3UI', null),
       ('Take off with Flutter', '2018-11-01', 'https://1drv.ms/p/s!Aoq2gL8AZ0zfrqp_QO-oHl6eFyqbEg',
        'https://youtu.be/VpSRGlgVXrE', null),
       ('Intro to Docker', '2018-08-01', null, null, 'https://github.com/jonstodle/WebDevDocker'),
       ('RxJS', '2017-05-01', 'https://slides.com/jonstodle/rxjs', null, null),
       ('Realm', '2017-03-01', 'https://slides.com/jonstodle/realm-eng#/', null,
        'https://github.com/jonstodle/RealmTodo');
