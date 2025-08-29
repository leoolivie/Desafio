# Etapa base para runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5000
EXPOSE 5001

# Etapa de build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copia apenas o .csproj
COPY DesafioApi.csproj ./
RUN dotnet restore "DesafioApi.csproj"

# Copia o restante dos arquivos (sem testes)
COPY . ./
RUN dotnet build "DesafioApi.csproj" -c Release -o /app/build
RUN dotnet publish "DesafioApi.csproj" -c Release -o /app/publish

# Etapa final
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "DesafioApi.dll"]
