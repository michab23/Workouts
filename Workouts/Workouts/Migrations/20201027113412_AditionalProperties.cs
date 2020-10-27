using Microsoft.EntityFrameworkCore.Migrations;

namespace Workouts.Migrations
{
    public partial class AditionalProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CityName",
                table: "Workout",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RunnerName",
                table: "Workout",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CityName",
                table: "Workout");

            migrationBuilder.DropColumn(
                name: "RunnerName",
                table: "Workout");
        }
    }
}
