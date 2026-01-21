<?php

namespace App\Imports;

use App\Models\BulletinAct;
use Carbon\Carbon;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Shared\Date;

class ViperActsImport
{
  public function import(string $filePath)
  {
    // Load the spreadsheet
    $spreadsheet = IOFactory::load($filePath);

    // Get the second sheet (Index 1)
    $sheet = $spreadsheet->getSheet(1);

    // Convert to array
    $rows = $sheet->toArray();

    foreach ($rows as $index => $row) {
      // Skip header row if needed (assuming Row 1 is header, so index 0)
      // Or if data starts at row 2 (index 1)
      // Let's assume index 0 is header.
      if ($index < 1) continue;

      // Row mapping:
      // Col 3 (Index 2): Date/Time
      // Col 6 (Index 5): Type
      // Col 7 (Index 6): Address
      // Col 8 (Index 7): Corner
      // Col 9 (Index 8): Commune
      // Col 10 (Index 9): Vehicles

      if (!isset($row[2])) {
        continue; // Skip empty rows
      }

      // Parsing Date/Time
      $date = null;
      $time = null;

      try {
        $val = $row[2];
        if (Date::isDateTime($sheet->getCell("C" . ($index + 1)))) {
          $dateTime = Date::excelToDateTimeObject($val);
          $date = $dateTime->format('Y-m-d');
          $time = $dateTime->format('H:i');
        } else {
          // Try Carbon parse
          $dateTime = Carbon::parse($val);
          $date = $dateTime->format('Y-m-d');
          $time = $dateTime->format('H:i');
        }
      } catch (\Exception $e) {
        // Fallback or skip
        // If simple text, maybe try to regex or just ignore time
        $date = now()->format('Y-m-d');
        $time = '00:00';
      }

      BulletinAct::create([
        'date' => $date,
        'time' => $time,
        'service_type' => $row[5] ?? 'Sin Clasificar',
        'address' => $row[6] ?? 'Sin Dirección',
        'corner' => $row[7] ?? null,
        'commune' => $row[8] ?? null,
        'vehicles' => $row[9] ?? null,
      ]);
    }
  }
}
