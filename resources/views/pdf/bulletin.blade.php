<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Boletín Mensual</title>
  <style>
    body {
      font-family: sans-serif;
      color: #333;
    }

    .header {
      text-align: center;
      margin-bottom: 30px;
      border-bottom: 3px double #108012;
      padding-bottom: 15px;
    }

    .title {
      font-family: serif;
      font-size: 32px;
      font-weight: 900;
      color: #111;
      text-transform: uppercase;
      letter-spacing: 1px;
      line-height: 1.2;
    }

    .subtitle {
      font-family: sans-serif;
      font-size: 14px;
      color: #108012;
      font-weight: bold;
      text-transform: uppercase;
      margin-top: 5px;
      letter-spacing: 2px;
    }

    .section-title {
      font-family: serif;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #111;
      border-bottom: 2px solid #108012;
      padding-bottom: 5px;
      text-transform: uppercase;
    }

    .stats-box {
      background-color: #fff;
      border: 1px solid #e5e7eb;
      padding: 15px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .acts-table th {
      background-color: #108012;
      color: white;
      text-transform: uppercase;
      font-size: 9px;
    }

    .article-title {
      font-family: serif;
      font-size: 18px;
      color: #111;
    }

    .footer {
      border-top: 3px solid #108012;
      color: #666;
    }
  </style>
</head>

<body>
  <div class="header">
    <div class="title">Segunda Compañía de Bomberos</div>
    <div class="subtitle">Puente Alto "Bomba Marcos Pérez"</div>
    <div style="margin-top: 10px; font-weight: bold;">Boletín Informativo - {{ $stats['month_year'] }}</div>
  </div>

  <div class="stats-box">
    <div class="stat-item">
      <span class="stat-label">Total Actos del Servicio:</span>
      <span class="stat-value">{{ $stats['actos_count'] }}</span>
    </div>
    <div style="clear: both;"></div>
    <div class="stat-item">
      <span class="stat-label">Academias y Capacitaciones:</span>
      <span class="stat-value">{{ $stats['capacitaciones_count'] }}</span>
    </div>
    <div style="clear: both;"></div>
  </div>

  @if(count($articles) > 0)
  <div class="section-title">Noticias Destacadas</div>
  @foreach($articles as $article)
  <div class="article">
    <div class="article-title">{{ $article->title }}</div>
    <div class="article-meta">{{ $article->category }} &bull; {{ \Carbon\Carbon::parse($article->published_at)->format('d/m/Y') }}</div>
    <div class="article-content">
      {{ \Illuminate\Support\Str::limit(strip_tags($article->content), 500) }}
    </div>
  </div>
  @endforeach
  @endif

  @if(count($acts) > 0)
  <div class="section-title" style="margin-top: 20px;">Registro de Actos</div>
  <table class="acts-table">
    <thead>
      <tr>
        <th width="15%">Fecha</th>
        <th width="10%">Hora</th>
        <th width="15%">Clave</th>
        <th width="35%">Dirección</th>
        <th width="25%">Comuna</th>
      </tr>
    </thead>
    <tbody>
      @foreach($acts as $act)
      <tr>
        <td>{{ \Carbon\Carbon::parse($act->date)->format('d/m/Y') }}</td>
        <td>{{ $act->time }}</td>
        <td style="font-weight: bold; color: #108012;">{{ $act->service_type }}</td>
        <td>
          {{ $act->address }}
          @if($act->corner) <br><span style="color: #6b7280;">Esq. {{ $act->corner }}</span> @endif
        </td>
        <td>{{ $act->commune ?? 'Puente Alto' }}</td>
      </tr>
      @endforeach
    </tbody>
  </table>
  @endif

  <div class="footer">
    Generado el {{ date('d/m/Y H:i') }} | www.segundapuentealto.cl
  </div>
</body>

</html>