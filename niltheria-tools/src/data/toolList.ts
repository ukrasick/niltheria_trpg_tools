// ツールデータの型定義
export interface ToolItem {
  id: string
  title: string
  description: string
  icon: string
  path: string
}

// 実際のデータを定義
export const TOOL_LIST: ToolItem[] = [
  {
    id: 'palette-converter',
    title: '《変換 -Palette Converter-》',
    description: 'BBT: キャラクターシート倉庫からキャラクター駒を変換出力',
    icon: 'mdi-palette-swatch',
    path: '/pc',
  },
]
