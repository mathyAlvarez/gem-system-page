import type { ComboboxOption } from "@gem-org/gem-system";

export const COUNTRIES: ComboboxOption[] = [
  { value: "ar", label: "Argentina" },
  { value: "br", label: "Brazil" },
  { value: "cl", label: "Chile" },
  { value: "co", label: "Colombia" },
  { value: "mx", label: "Mexico" },
  { value: "pe", label: "Peru" },
  { value: "uy", label: "Uruguay" },
  { value: "us", label: "United States" },
];

export const CITIES: ComboboxOption[] = [
  { value: "ba", label: "Buenos Aires", description: "Argentina" },
  { value: "sp", label: "São Paulo", description: "Brazil" },
  { value: "stgo", label: "Santiago", description: "Chile" },
  { value: "bog", label: "Bogotá", description: "Colombia" },
  { value: "cdmx", label: "Mexico City", description: "Mexico" },
  { value: "lim", label: "Lima", description: "Peru" },
  { value: "mvd", label: "Montevideo", description: "Uruguay" },
  { value: "nyc", label: "New York", description: "United States" },
];

export const LIBRARIES: ComboboxOption[] = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
  { value: "solid", label: "Solid" },
];

export const CITY_RECORDS = [
  { code: "ba", name: "Buenos Aires", country: "Argentina", tag: "BA" },
  { code: "sp", name: "São Paulo", country: "Brazil", tag: "SP" },
  { code: "stgo", name: "Santiago", country: "Chile", tag: "CL" },
  { code: "bog", name: "Bogotá", country: "Colombia", tag: "BO" },
  { code: "cdmx", name: "Mexico City", country: "Mexico", tag: "MX" },
  { code: "lim", name: "Lima", country: "Peru", tag: "LI" },
  { code: "mvd", name: "Montevideo", country: "Uruguay", tag: "UY" },
  { code: "nyc", name: "New York", country: "United States", tag: "NY" },
];

export const USERS = [
  { id: "u1", name: "Ada Lovelace", role: "Admin", active: true },
  { id: "u2", name: "Alan Turing", role: "Editor", active: true },
  { id: "u3", name: "Grace Hopper", role: "Viewer", active: false },
  { id: "u4", name: "Katherine Johnson", role: "Editor", active: true },
];

export const WORKSPACES: ComboboxOption[] = [
  { value: "personal", label: "Personal" },
  { value: "team", label: "Team" },
  { value: "enterprise", label: "Enterprise" },
];
