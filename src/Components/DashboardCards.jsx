import { Box, Typography, Card, CardContent } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const DashboardCards = () => {
  const stats = [
    {
      title: "Total Active Users",
      value: "18,765",
      change: "+2.6%",
      changeType: "positive",
      icon: <ArrowUpwardIcon style={{ color: "green" }} />,
      graphColor: "#00CFFF",
      bars: [12, 18, 10, 22, 8, 15],
    },
    {
      title: "Total Installed",
      value: "4,876",
      change: "+0.2%",
      changeType: "positive",
      icon: <ArrowUpwardIcon style={{ color: "green" }} />,
      graphColor: "#00CFFF",
      bars: [10, 20, 15, 25, 10, 12],
    },
    {
      title: "Total Downloads",
      value: "678",
      change: "-0.1%",
      changeType: "negative",
      icon: <ArrowDownwardIcon style={{ color: "red" }} />,
      graphColor: "#FFB74D",
      bars: [15, 10, 20, 8, 22, 12],
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap={3}
      sx={{ p: 3, backgroundColor: "#f5f5f5" }}
    >
      {stats.map((stat, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: 320,
            p: 3,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          {/* Left Content */}
          <CardContent sx={{ flex: 1 }}>
            {/* Title */}
            <Typography variant="body2" color="text.secondary" mb={1}>
              {stat.title}
            </Typography>

            {/* Percentage Change with Icon */}
            <Box display="flex" alignItems="center" mb={1}>
              {stat.icon}
              <Typography
                variant="body2"
                color={stat.changeType === "positive" ? "green" : "red"}
                ml={0.5}
              >
                {stat.change}
              </Typography>
            </Box>

            {/* Total Value */}
            <Typography variant="h4" fontWeight="bold">
              {stat.value}
            </Typography>
          </CardContent>

          {/* Right Analytics Graph */}
          <Box
            sx={{
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                alignItems: "flex-end",
              }}
            >
              {stat.bars.map((height, barIndex) => (
                <Box
                  key={barIndex}
                  sx={{
                    width: 4,
                    height: `${height}px`,
                    backgroundColor: stat.graphColor,
                    borderRadius: "2px",
                  }}
                ></Box>
              ))}
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default DashboardCards;
