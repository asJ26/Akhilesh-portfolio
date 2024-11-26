import { 
  SiPython, SiJava, SiScala, SiR, SiGo, SiBash,
  SiApachespark, SiApachekafka, SiApachehadoop, SiApachehive, SiHbase, SiApacheflink,
  SiPostgresql, SiMysql, SiMongodb, SiCassandra, SiRedis, SiSnowflake, SiOracle, SiMicrosoftsqlserver,
  SiAmazonaws, SiGooglecloud, SiMicrosoftazure, SiDatabricks, SiGooglebigquery,
  SiApacheairflow, SiTalend, SiInformatica, SiAmazondynamodb, SiElasticsearch,
  SiDocker, SiKubernetes, SiJenkins, SiTerraform, SiAnsible,
  SiPowerbi, SiTableau, SiLooker
} from 'react-icons/si';
import { 
  FaDatabase, FaServer, FaCloud, FaLock, FaCog, FaChartBar,
  FaCode, FaTerminal, FaNetworkWired, FaShieldAlt
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  category: string;
  icon: IconType;
}

export const skills: Skill[] = [
  // Core Data Engineering
  { name: "Data Modeling", category: "Core Data Engineering", icon: FaDatabase },
  { name: "ETL/ELT Processes", category: "Core Data Engineering", icon: FaNetworkWired },
  { name: "Data Warehousing", category: "Core Data Engineering", icon: FaServer },
  { name: "Data Lakes", category: "Core Data Engineering", icon: FaDatabase },
  { name: "Data Pipelines", category: "Core Data Engineering", icon: FaNetworkWired },
  { name: "Real-time Data Processing", category: "Core Data Engineering", icon: FaCog },
  { name: "Batch Processing", category: "Core Data Engineering", icon: FaServer },

  // Programming Languages
  { name: "Python", category: "Languages", icon: SiPython },
  { name: "SQL (Advanced)", category: "Languages", icon: FaDatabase },
  { name: "Java", category: "Languages", icon: SiJava },
  { name: "Scala", category: "Languages", icon: SiScala },
  { name: "R", category: "Languages", icon: SiR },
  { name: "Shell Scripting", category: "Languages", icon: FaTerminal },
  { name: "Go", category: "Languages", icon: SiGo },
  { name: "Bash", category: "Languages", icon: SiBash },

  // Big Data Technologies
  { name: "Apache Spark", category: "Big Data", icon: SiApachespark },
  { name: "Apache Kafka", category: "Big Data", icon: SiApachekafka },
  { name: "Hadoop & HDFS", category: "Big Data", icon: SiApachehadoop },
  { name: "Hive", category: "Big Data", icon: SiApachehive },
  { name: "HBase", category: "Big Data", icon: SiHbase },
  { name: "Apache Flink", category: "Big Data", icon: SiApacheflink },
  { name: "Apache NiFi", category: "Big Data", icon: FaNetworkWired },
  { name: "Apache Beam", category: "Big Data", icon: FaNetworkWired },

  // Databases
  { name: "PostgreSQL", category: "Databases", icon: SiPostgresql },
  { name: "MySQL", category: "Databases", icon: SiMysql },
  { name: "MongoDB", category: "Databases", icon: SiMongodb },
  { name: "Cassandra", category: "Databases", icon: SiCassandra },
  { name: "Redis", category: "Databases", icon: SiRedis },
  { name: "Snowflake", category: "Databases", icon: SiSnowflake },
  { name: "Oracle Database", category: "Databases", icon: SiOracle },
  { name: "Microsoft SQL Server", category: "Databases", icon: SiMicrosoftsqlserver },

  // Cloud Platforms
  { name: "Amazon Web Services (AWS)", category: "Cloud", icon: SiAmazonaws },
  { name: "Google Cloud Platform (GCP)", category: "Cloud", icon: SiGooglecloud },
  { name: "Microsoft Azure", category: "Cloud", icon: SiMicrosoftazure },
  { name: "Databricks Platform", category: "Cloud", icon: SiDatabricks },
  { name: "Google BigQuery", category: "Cloud", icon: SiGooglebigquery },
  { name: "Amazon Redshift", category: "Cloud", icon: SiAmazonaws },
  { name: "Azure Data Lake Storage", category: "Cloud", icon: SiMicrosoftazure },

  // Data Integration & Orchestration
  { name: "Apache Airflow", category: "Data Integration", icon: SiApacheairflow },
  { name: "Talend", category: "Data Integration", icon: SiTalend },
  { name: "Informatica", category: "Data Integration", icon: SiInformatica },
  { name: "AWS Glue", category: "Data Integration", icon: SiAmazonaws },
  { name: "Azure Data Factory", category: "Data Integration", icon: SiMicrosoftazure },
  { name: "Data Build Tool (DBT)", category: "Data Integration", icon: FaDatabase },

  // Data Security & Compliance
  { name: "Data Encryption", category: "Security & Compliance", icon: FaLock },
  { name: "Data Masking", category: "Security & Compliance", icon: FaShieldAlt },
  { name: "Role-Based Access Control", category: "Security & Compliance", icon: FaLock },
  { name: "Identity and Access Management", category: "Security & Compliance", icon: FaShieldAlt },
  { name: "GDPR/HIPAA/CCPA Compliance", category: "Security & Compliance", icon: FaShieldAlt },

  // Performance & Optimization
  { name: "Query Optimization", category: "Performance", icon: FaCog },
  { name: "Data Caching", category: "Performance", icon: FaServer },
  { name: "Sharding & Partitioning", category: "Performance", icon: FaDatabase },
  { name: "Cluster Management", category: "Performance", icon: FaServer },
  { name: "Load Balancing", category: "Performance", icon: FaNetworkWired },
  { name: "Resource Management", category: "Performance", icon: FaCog },

  // DevOps & Tools
  { name: "Git/GitHub/GitLab", category: "DevOps", icon: FaCode },
  { name: "Jenkins", category: "DevOps", icon: SiJenkins },
  { name: "Docker", category: "DevOps", icon: SiDocker },
  { name: "Kubernetes", category: "DevOps", icon: SiKubernetes },
  { name: "Terraform", category: "DevOps", icon: SiTerraform },
  { name: "Ansible", category: "DevOps", icon: SiAnsible },

  // Data Visualization
  { name: "Power BI", category: "Visualization", icon: SiPowerbi },
  { name: "Tableau", category: "Visualization", icon: SiTableau },
  { name: "Looker", category: "Visualization", icon: SiLooker },
  { name: "Sigma Computing", category: "Visualization", icon: FaChartBar }
];
