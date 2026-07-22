# Jornada do AutoAmor — Vivi Soares — Project Reference

This file is the source of truth for content, brand voice, business model, and
decisions already made on this project. The first implementation (HTML/CSS/JS)
was deleted because the design/layout wasn't approved — this content survives
that reset so nothing has to be re-researched from Google Drive again.

## Status

- **Design/layout: rejected, redoing from scratch.** Content below is still valid.
- **Tech stack decided:** static HTML/CSS/JS, no build step, no framework.
- **Scope decided:** landing page (front-end) only for now. The purchase/access
  backend (InfinitePay webhook, auto-registration, members area) is an explicit
  phase 2, not started, and needs its own auth/database decision when we get there.
- **Real image assets on disk:** `assets/images/vivi-arco-iris.jpg` (Vivi, rainbow
  light flare portrait — confirmed correct) and `assets/images/metodo-caminho-da-alma.png`
  (the official 6-pillar method diagram — confirmed correct). Both pulled from
  Vivi's Google Drive and visually verified.
- **Do not pull more photos from Drive by filename search.** A prior broad search
  returned two files titled "Foto de Vivi" that were actually unrelated photos of
  children playing soccer — Drive filenames/metadata in this account are not
  reliable. If more photography is needed, ask the user to point to the specific
  correct folder, or use clearly-labeled placeholder blocks instead of guessing.

## Business model (this is not a single product)

Three tiers, ascending commitment/price — a value ladder, not one offer:

1. **Canal do Autoencontro** — entry-level content/community channel. Copy and
   price are **not yet written** (source doc has literal placeholders: "Valor? / Bio").
   Includes: meditations, curated films/books/music, talks ("DEC Talk").
2. **Jornada do AutoAmor Online** — R$333, self-paced digital product, one-time
   payment, lifetime access. This is the product the landing page (v1) was built
   for, and has the most complete copy (see below).
3. **Mentoria Caminho da Alma** — R$3.500, 6-month high-touch program (5 individual
   sessions in the first 3 months + biweekly group sessions across 6 months +
   WhatsApp support). Needs a "book a call / apply" conversion flow, not an
   instant-buy button — see Strategy Notes below.

## Brand voice — manifesto quotes (from "Frases de impacto" doc)

Use these as hero lines, section dividers, pull-quotes. Don't invent new ones in
this voice — pull from this list or ask Vivi for more.

- "O autoconhecimento é o caminho para a libertação e o autoamor é a chave para o recebimento." — Vivi Soares
- "Eu não conduzo pessoas para que se tornem alguém diferente. Conduzo pessoas para que se lembrem de quem verdadeiramente são."
- "Tudo o que compartilho foi vivido por mim."
- "O AutoAmor não muda quem você é. Ele revela quem você sempre foi."
- "Tudo o que você procura fora começa a despertar quando se reencontra consigo."
- "Quando mente, coração e alma caminham na mesma direção, a vida passa a fazer mais sentido."
- "Eu sei que existe uma vida mais verdadeira esperando por mim." (identification line, not Vivi's voice — the visitor's)

## Vivi Soares — bio

**Short version** (used "who's guiding you" style, on a product page):

> Sou Vivi Soares, criadora do Método Caminho da Alma, especialista em AutoEncontro,
> terapeuta integrativa e facilitadora de transformação.
>
> Desenvolvi o Método Caminho da Alma, uma metodologia autoral que integra
> desenvolvimento humano, autoconhecimento, saúde mental e emocional,
> espiritualidade e práticas terapêuticas, conduzindo pessoas em processos de
> reconexão com sua essência e propósito de vida.
>
> Sou economista, com MBA em Management e Marketing pela FGV, e construí uma
> trajetória de quase 30 anos no mundo corporativo, incluindo uma experiência em
> uma startup no Vale do Silício.
>
> Após me tornar mãe, iniciei uma profunda jornada de autoconhecimento que
> transformou minha vida e ampliou minha compreensão sobre o desenvolvimento
> humano. Ao longo desse caminho, participei de formações, retiros, imersões e
> experiências em meditação, yoga, sound healing, xamanismo, ancestralidade e
> outras práticas integrativas.
>
> Hoje, uno minha experiência profissional e minha trajetória de transformação
> para conduzir pessoas em jornadas de AutoEncontro, promovendo mais consciência,
> equilíbrio emocional, liberdade e conexão com a voz do coração.
>
> Tudo o que compartilho foi, antes, vivido por mim.

**Long version** ("Quem é Vivi Soaress" doc — use for a dedicated About page):

> Sou Vivi Soaress, mãe, fundadora da Jornada da ALMA e criadora do método Caminho
> da ALMA. Mentora, terapeuta integrativa, facilitadora de vivências de
> autoconhecimento, cura, conexão espiritual e expansão da consciência.
> Idealizadora da Jornada do AutoAmor, criadora do Canal do Autoencontro e do DEC
> Talk (conversas profundas sobre espiritualidade e autoconhecimento).
>
> Guardiã do feminino sagrado, do portal XamafliX, da natureza e dos saberes
> ancestrais, facilito jornadas transformadoras coletivas e individuais.
>
> Mais de 1.000 vidas já foram impactadas pelo meu servir ao longo dos últimos anos.
>
> Sou economista com MBA em Management e Marketing pela FGV. Vivi quase 30 anos no
> mundo corporativo. Fui diretora de empresa aos 21 anos e atuei como financeira
> global de uma startup do Vale do Silício, além de liderar projetos em áreas como
> finanças, RH, eventos, educação e tecnologia.
>
> Produtiva, multitarefa, eficiente, mas vivia cansada. Cuidava de todos, mas não
> tinha tempo para mim. Vivia no automático, sem saber quem a minha alma era.
>
> Meu maior sonho era ser mãe. E ele se realizou aos 30 e 32 anos. Foi por amor aos
> meus filhos que iniciei um mergulho profundo em mim mesma. Por eles, comecei
> minha jornada de transformação. Me encontrei. Me amei.
>
> Nos últimos 11 anos, mergulhei profundamente em mim: muitas formações, estudos,
> experiências, viagens, retiros, cerimônias com medicinas da floresta, práticas
> ancestrais, sound healing, yoga, meditação, cura da minha criança interior, da
> minha ancestralidade e do feminino.
>
> Fui me despindo de papéis, curando feridas, libertando crenças e padrões, me
> reconectando com a potência do meu ser. Me lembrei de quem sou. E me coloquei a
> serviço da Nova Terra.
>
> Hoje, sirvo para ajudar outros seres a voltarem a sentir e a serem guiados pelo
> coração na transformação de suas vidas. Tudo o que compartilho, eu vivi na pele.
> E é com presença, integridade, verdade, responsabilidade e amor que sigo guiando
> pessoas de volta para casa: o encontro com a essência de suas almas.
>
> A minha maior alegria é acompanhar a evolução e a transformação em cada processo
> que guio.
>
> "Cada coração tocado por ti é um mundo transformado. Ensina o que sentes, vive a
> sua verdade e minha força fluirá através de ti. Teu coração já sabe. Tua missão é
> despertar outros corações, sê a faísca que acende a chama da vida."

**Credibility facts to reuse:** economista, MBA em Management e Marketing pela
FGV; quase 30 anos no mundo corporativo; diretora de empresa aos 21 anos;
financeira global de uma startup do Vale do Silício; mãe aos 30 e 32 anos; 11
anos de mergulho em autoconhecimento; +1.000 vidas impactadas.

## O Método Caminho da Alma (the shared methodology — used across all 3 offers)

> Uma metodologia autoral desenvolvida a partir da própria trajetória de
> transformação de Vivi Soares, da experiência adquirida ao longo dos atendimentos
> terapêuticos e da integração de diferentes conhecimentos sobre desenvolvimento
> humano, autoconhecimento, saúde mental e emocional, consciência, espiritualidade
> e práticas integrativas. Parte da compreensão de que somos seres
> multidimensionais — e que uma transformação profunda acontece quando cuidamos de
> todas as dimensões que compõem a nossa existência.

**The six pillars:**

1. **Reconexão Espiritual** — Reconectar-se com a sabedoria interior, a intuição e a espiritualidade para viver com mais sentido.
2. **Cura Emocional** — Acolher emoções, compreender padrões e fortalecer uma relação mais amorosa consigo.
3. **Libertação Ancestral** — Reconhecer histórias e crenças herdadas para abrir espaço a novas escolhas.
4. **Equilíbrio Energético** — Fortalecer a energia vital, favorecendo presença, vitalidade e equilíbrio.
5. **Clareza Mental** — Observar pensamentos e crenças para alinhar mente, coração e propósito.
6. **Enraizamento Físico** — Honrar o corpo como templo da alma e integrar a consciência à vida cotidiana.

(Real diagram of this exists at `assets/images/metodo-caminho-da-alma.png`.)

## Jornada do AutoAmor Online — full product copy

- **Price:** R$333, one-time payment, lifetime access ("acesso vitalício").
- **Payment link (live, real):** `https://link.infinitepay.io/vivisoaress/VC1D-C0na2uElDt-333,00`
- **Format:** 11 guided meditations ("11 Portais de AutoEncontro"), self-paced, no cohorts/dates.
- **Open question from Vivi herself (unresolved):** "Como liberar acesso no site?
  Melhor pelo gmail" / "Como é o acesso?" — the post-payment delivery flow is not
  decided. Don't promise "instant access" in copy until this is resolved; today the
  honest claim is "access sent to the email used at checkout after payment is confirmed."

**Hero:**
> Reencontre-se. Escute a voz do seu coração. Viva a liberdade de Ser quem você é.
>
> Existe uma vida mais conectada com quem você verdadeiramente é. Uma vida com mais
> consciência. Mais presença. Mais equilíbrio. Mais propósito. A Jornada do
> AutoAmor Online é um convite para esse reencontro.

**Identification block ("Talvez você tenha chegado até aqui porque..."):**
- Sente que algo precisa mudar, mesmo sem saber exatamente por onde começar.
- Percebe histórias e padrões se repetindo.
- Vive no automático e deseja estar mais presente na própria vida.
- Busca mais clareza para fazer escolhas alinhadas ao que realmente faz sentido para você.
- Quer compreender e transformar padrões e crenças que já não sustentam a vida que deseja viver.
- Deseja fortalecer sua conexão espiritual e aprender a ouvir mais profundamente a voz do seu coração.
- Closing line: "Eu sei que existe uma vida mais verdadeira esperando por mim."

**The 11 Portais de AutoEncontro** (each = one guided meditation):

1. **Alinhamento Energético** — Reconexão com sua energia vital e centramento.
2. **Resgate de Alma** — Reconhecendo e acolhendo partes suas que ficaram marcadas por experiências difíceis da vida.
3. **Reequilibrando os Chakras** — Uma experiência para favorecer harmonização energética, presença e relaxamento.
4. **Reconexão e Cura da Criança Interior** — Um encontro amoroso com sua história para acolher emoções e resgatar alegria, espontaneidade e leveza.
5. **Alinhamento com o Eu Sou** — Reconexão com sua essência e com a verdade de quem você é.
6. **Os Elementos da Natureza em Você** — Um convite para despertar simbolicamente as qualidades da Terra, Água, Fogo e Ar presentes em seu ser.
7. **Libertação Ancestral** — Reconhecer padrões familiares e abrir espaço para novos caminhos.
8. **Cura nos Relacionamentos** — Um encontro com as energias materna e paterna, fortalecendo acolhimento, pertencimento e confiança.
9. **Conexão com o AutoAmor** — Um profundo encontro consigo mesma(o).
10. **Manifestação da Abundância Divina** — Expandindo a consciência para receber aquilo que está alinhado ao propósito da sua alma.
11. **Meditação do Arco-Íris** — Integração, expansão e celebração da sua jornada.

**Benefits list ("O que essa Jornada pode despertar em você?"):**
Mais consciência sobre si · Mais clareza para fazer escolhas · Mais conexão com
sua essência · Mais equilíbrio emocional · Fortalecimento da intuição ·
Reconhecimento de padrões e crenças · Mais presença no cotidiano · Conexão com a
espiritualidade · Mais liberdade para viver quem você realmente é.

**What's included:** 11 meditações guiadas · Método Caminho da Alma · Acesso
vitalício · Ouça quando quiser, no seu ritmo · Acesse direto do celular.

## Mentoria Caminho da Alma — full program details

- **Price:** R$3.500 ("autoinvestimento").
- **Duration:** 6 months.
- **Format:** 5 individual sessions (in the first 3 months) + biweekly group
  sessions (across all 6 months) + 1:1 WhatsApp support + exclusive WhatsApp group
  for participants + Trello board for tracking progress.
- **Delivery:** initial diagnostic with a personalized content track, platform
  with materials/recordings, access to "Canal do AUTOENCONTRO" as a supporting
  resource (meditations, prayers, curated films/books/music, talks), PDF with
  reflections/prayers/power phrases.
- **Objective (verbatim):** "Reconectar mulheres com sua essência mais profunda,
  por meio de um caminho de autoconhecimento e cura baseado na metodologia
  Caminho da Alma, que atua nos seis corpos: espiritual, emocional, ancestral,
  energético, mental e físico."
- **Strategy note:** this is a high-ticket, relationship-based offer. Converting
  it with an instant "buy now" button (like the R$333 product) undersells it —
  the source doc ends on a flat "Autoinvestimento - R$3.500,00" line, which reads
  transactional for a 6-month 1:1 commitment. Recommend a "book a call / apply"
  CTA instead of instant checkout, and a page narrative weighted toward "who this
  is for" / "what changes in 6 months" rather than just the method explanation.

## Canal do Autoencontro — gap, not yet written

Referenced constantly as part of the value ladder and as a supporting resource
inside the Mentoria, but has **no finished copy or price**. The source doc
("alterações") literally has placeholders: "PÁGINA CANAL DO AUTOENCONTRO / Valor?
/ Bio". Known content pieces: meditations, prayers, curated films/books/music,
"palestras e bate papos", DEC Talk. This needs to be written with Vivi before it
can become a real page.

## Testimonials

- **The one real, sourced written quote:** "A Vivi Soares mudou a minha vida
  porque me ensinou a seguir a voz do meu coração e a ser eu mesma." (attributed
  generically as "Aluna da Jornada do AutoAmor" — no full name/photo was in the
  source doc.)
- **8 real testimonial screenshots** (Instagram comments + WhatsApp DMs from real
  students, several already saved by Vivi herself as "Depoimento" on her own
  Instagram) are live on the site as `assets/images/depoimento-1.jpg` through
  `depoimento-8.jpg`, shown as an image gallery in the Depoimentos section.
  Authors visible in the screenshots: Leila Iara Dias, Bia Siqueira, Vini Reis,
  Ana Olívia, Laura Karol, Valéria Chalita, Paulinha Goldenberg, and a comment
  from Dra. Fabricia Meneghini. These were uploaded by the user directly via the
  GitHub web UI and pulled in with `git pull`, not sourced from Drive.
- **5 video testimonials exist as YouTube links** but are **not transcribed or
  curated yet**:
  - https://youtu.be/Ngqf9XwyhCo
  - https://youtube.com/shorts/dpbXb_9M7QQ
  - https://youtube.com/shorts/uNC-mt3ijCQ
  - https://youtube.com/shorts/yXzdlD6x_s0
  - https://youtube.com/shorts/ng6qjBpr75I
- There is also a Drive folder of testimonials referenced but not enumerated:
  `https://drive.google.com/drive/folders/17DflUgXfgkhqhgMoxQ8CrOS6r_99Rl8A`
- **Do not fabricate additional testimonials.** Only use what's real/sourced above
  until Vivi provides more.

## FAQ answers already drafted (Jornada product, all fact-checked against the docs above)

- **Quanto tempo dura a Jornada?** Você decide — 11 meditações guiadas, sem prazo, ritmo livre, acesso vitalício.
- **Tenho acesso para sempre?** Sim, acesso vitalício.
- **Posso fazer no meu próprio ritmo?** Sim — sem turmas, sem datas fixas.
- **Preciso ter experiência prévia?** Não, desenhado para iniciantes.
- **Funciona no celular?** Sim.
- **Como recebo o acesso após o pagamento?** Honest/current answer only: "Após a
  confirmação do pagamento via InfinitePay, o acesso é liberado para o e-mail
  usado na compra." Do not promise instant/automatic delivery — see open question above.

## Contact / footer facts

- Email: contatovivisoares@gmail.com
- Instagram link: not yet provided, needs a real URL before publishing
- Privacy Policy / Terms: **do not exist yet**, required before a real checkout goes live

## Strategy notes carried over from the first pass (still valid, design-independent)

- This is a hub-and-spoke content architecture, not one flat page: home/hub
  builds trust, each of the 3 offers gets its own dedicated sales page at its own
  pace (self-service vs. book-a-call).
- Método Caminho da Alma and Vivi's bio are currently duplicated near-verbatim
  across the Jornada doc and the Mentoria doc — worth consolidating into one
  canonical source (a dedicated Método page, a dedicated Sobre page) that the
  offer pages summarize and link to, rather than re-explaining every time.
- Reference layouts evaluated so far: "Bliss" (hotel/spa booking template) —
  rejected, wrong mental model (rooms/booking vs. a single digital product).
  "ALIVE Luxury Retreats" — good tonal/structural reference (holistic-pillars
  grid, identification section, qualifying checklist, warm premium palette) but
  it's a physical-retreat business, so location/booking-specific elements don't
  transfer directly.

## What's next

The user did not like the v1 design/layout (HTML structure above was deleted).
Before rebuilding, get explicit direction on: visual style references, palette,
typography, and what specifically felt wrong about v1 — don't assume it was the
content order, since the content itself hasn't been challenged.
