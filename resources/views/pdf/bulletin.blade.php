@php
\Carbon\Carbon::setLocale('es');
@endphp
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Boletín Mensual</title>
  <style>
    @page {
      margin: 1cm;
    }

    body {
      font-family: 'Times New Roman', Times, serif;
      color: #111;
      line-height: 1.15;
      /* Requested 1.15 */
      font-size: 11pt;
    }

    /* Newspaper Header */
    .header {
      text-align: center;
      border-bottom: 4px double #111;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }

    .brand {
      font-family: 'Times New Roman', Times, serif;
      font-size: 36px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }

    .sub-brand {
      font-family: sans-serif;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      color: #108012;
      /* Brand Green */
      letter-spacing: 2px;
      margin-bottom: 10px;
    }

    .meta-bar {
      border-top: 1px solid #111;
      border-bottom: 1px solid #111;
      padding: 5px 0;
      font-family: sans-serif;
      font-size: 9px;
      text-transform: uppercase;
      display: flex;
      /* dompdf fallback */
      text-align: center;
      font-weight: bold;
    }

    /* Stats Stripe */
    .stats-stripe {
      background-color: #f3f4f6;
      padding: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      text-align: center;
      font-family: sans-serif;
      font-size: 10px;
    }

    .stat-item {
      display: inline-block;
      margin: 0 15px;
    }

    .stat-value {
      font-weight: 900;
      font-size: 14px;
      color: #b91c1c;
      /* Brand Red */
    }

    /* Layout */
    .section-header {
      font-family: sans-serif;
      font-size: 14px;
      font-weight: 900;
      text-transform: uppercase;
      border-bottom: 3px solid #111;
      margin-top: 25px;
      margin-bottom: 15px;
      padding-bottom: 3px;
      page-break-after: avoid;
      /* Prevent header at bottom of page */
    }

    .category-label {
      background-color: #111;
      color: #fff;
      padding: 3px 8px;
      display: inline-block;
    }

    .article {
      margin-bottom: 30px;
      /* page-break-inside: avoid; */
      /* Removing this as it can cause large gaps if article is long */
      clear: both;
      /* Ensure clearing floats */
      overflow: hidden;
      /* Clearfix */
    }

    .article-title {
      font-family: 'Times New Roman', Times, serif;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
      line-height: 1.1;
      page-break-after: avoid;
      /* Keep title with content */
    }

    .article-date {
      font-family: sans-serif;
      font-size: 9px;
      color: #666;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .article-img {
      width: 50%;
      /* Adjusted for wrapping */
      height: auto;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      display: block;
    }

    .img-left {
      float: left;
      margin-right: 15px;
    }

    .img-right {
      float: right;
      margin-left: 15px;
    }

    .article-content {
      text-align: justify;
      font-size: 10pt;
      line-height: 1.15;
      /* Requested interlineado */
      white-space: pre-wrap;
      /* Preserve intended newlines after cleanup */
    }

    /* Acts Table */
    .acts-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 9pt;
      font-family: sans-serif;
      margin-top: 10px;
    }

    .acts-table th {
      background-color: #111;
      color: #fff;
      text-align: left;
      padding: 5px;
      font-size: 8pt;
      text-transform: uppercase;
    }

    .acts-table td {
      border-bottom: 1px solid #ddd;
      padding: 5px;
      vertical-align: top;
    }

    .footer {
      margin-top: 50px;
      text-align: center;
      font-size: 8pt;
      color: #888;
      border-top: 1px solid #ddd;
      padding-top: 10px;
    }
  </style>
</head>

<body>

  <!-- Header -->
  <div class="header">
    <div class="brand">Segunda Compañía</div>
    <div class="sub-brand">Cuerpo de Bomberos de Puente Alto "Bomba Marcos Pérez Inzunza"</div>
    <div class="meta-bar">
      Boletín Informativo &nbsp;&bull;&nbsp; {{ $stats['month_year'] }} &nbsp;&bull;&nbsp; www.segundacbpa.cl
    </div>
  </div>

  <!-- Stats Stripe -->
  <div class="stats-stripe">
    <div class="stat-item">
      TOTAL EMERGENCIAS: <span class="stat-value">{{ $stats['actos_count'] }}</span>
    </div>
    <div class="stat-item">
      ACADEMIAS Y CAPAC.: <span class="stat-value">{{ $stats['capacitaciones_count'] }}</span>
    </div>
  </div>

  <!-- Articles -->
  @foreach($groupedArticles as $category => $articles)
  <div class="section-header">
    <span class="category-label">{{ $category }}</span>
  </div>

  @foreach($articles as $article)
  <div class="article">
    <div class="article-title">{{ $article->title }}</div>
    <div class="article-date">
      {{ \Carbon\Carbon::parse($article->published_at)->locale('es')->isoFormat('dddd D [de] MMMM [de] YYYY') }}
    </div>

    @if($article->image_data || $article->image_path)
    <?php
    $imgSrc = null;
    if (!empty($article->image_data)) {
      $imgSrc = $article->image_data;
    } elseif (!empty($article->image_path)) {
      if (str_starts_with($article->image_path, '/')) {
        $imgSrc = public_path($article->image_path);
      } else {
        $imgSrc = public_path('/' . $article->image_path);
      }
    }
    // Determinar clase de alineación (intercalada)
    $imgClass = ($loop->iteration % 2 == 0) ? 'img-right' : 'img-left';
    ?>
    @if($imgSrc)
    <img src="{{ $imgSrc }}" class="article-img {{ $imgClass }}">
    @endif
    @endif

    <div class="article-content">
      {!! $article->content !!}
    </div>
  </div>
  <hr style="border: 0; border-bottom: 1px solid #eee; margin: 20px 0;">
  @endforeach
  @endforeach

  <!-- Acts Section -->
  @if(count($acts) > 0)
  <div class="section-header">
    <span class="category-label">Registro de Actos</span>
  </div>

  <table class="acts-table">
    <thead>
      <tr>
        <th width="12%">Fecha</th>
        <th width="8%">Hora</th>
        <th width="15%">Clave</th>
        <th width="40%">Dirección</th>
        <th width="25%">Comuna</th>
      </tr>
    </thead>
    <tbody>
      @foreach($acts as $act)
      <tr>
        <td>{{ \Carbon\Carbon::parse($act->date)->format('d/m') }}</td>
        <td>{{ $act->time }}</td>
        <td style="font-weight: bold; color: #b91c1c;">{{ $act->key }}</td>
        <td>
          {{ $act->address }}
          @if($act->corner) <br><span style="color: #6b7280; font-size: 8pt;">Esq. {{ $act->corner }}</span> @endif
        </td>
        <td>{{ $act->commune ?? '-' }}</td>
      </tr>
      @endforeach
    </tbody>
  </table>
  @endif

  <div class="footer">
    Generado automáticamente por el Sistema de Gestión Interna de la Segunda Compañía.
  </div>

</body>

</html>