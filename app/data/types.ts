type TableType = "node" | "way";
type TableLeisure = "pitch";
type TableSport = "table_tennis";

interface TableTags {
  leisure: TableLeisure;
  sport: TableSport;
  material?: string;
  check_date?: Date;
  lit?: string;
  wheelchair?: string;
  access?: string;
  source?: string;
  covered?: string;
  fee?: string;
  indoor?: string;
  surface?: string;
}

interface Table {
  type: TableType;
  id: number;
  tags: TableTags;
}

interface NodeTable extends Table {
  lat: number;
  lon: number;
}

interface WayTable extends Table {
  center: {
    lat: number;
    lon: number;
  };
  nodes: number[];
}
