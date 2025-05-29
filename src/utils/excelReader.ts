import * as path from 'path';
import * as XLSX from 'xlsx';
import * as fs from 'fs';

export function readExcelData(relativePath: string, sheetName: string): Record<string, any> {
 
 const filePath = path.resolve(process.cwd(), relativePath);
  
 const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) throw new Error(`Sheet "${sheetName}" not found in ${filePath}`);

  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
  const map: Record<string, any> = {};
  for (const row of rows) {
    const { name, selector, URL } = row as any;
    map[name] = selector? selector : URL;
  }
  return map;
}
