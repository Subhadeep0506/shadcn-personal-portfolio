{ pkgs }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.bun
    pkgs.htop
  ];
  idx.extensions = [
    "dbaeumer.vscode-eslint"
    "teabyii.ayu"
    "bradlc.vscode-tailwindcss"
    "kamikillerto.vscode-colorize"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "bun"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
