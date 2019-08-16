// Export all available scans

module.exports = {
    aws : {
        'acmValidation'                 : require(__dirname + '/plugins/aws/acm/acmValidation.js'),
        'acmCertificateExpiry'          : require(__dirname + '/plugins/aws/acm/acmCertificateExpiry.js'),
        'asgMultiAz'                    : require(__dirname + '/plugins/aws/autoscaling/asgMultiAz.js'),
        'workgroupEncrypted'            : require(__dirname + '/plugins/aws/athena/workgroupEncrypted.js'),
        'workgroupEnforceConfiguration' : require(__dirname + '/plugins/aws/athena/workgroupEnforceConfiguration.js'),
        'publicS3Origin'                : require(__dirname + '/plugins/aws/cloudfront/publicS3Origin.js'),
        'secureOrigin'                  : require(__dirname + '/plugins/aws/cloudfront/secureOrigin.js'),
        'insecureProtocols'             : require(__dirname + '/plugins/aws/cloudfront/insecureProtocols.js'),
        'cloudfrontHttpsOnly'           : require(__dirname + '/plugins/aws/cloudfront/cloudfrontHttpsOnly.js'),
        'cloudfrontLoggingEnabled'      : require(__dirname + '/plugins/aws/cloudfront/cloudfrontLoggingEnabled.js'),

        'cloudtrailBucketAccessLogging' : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailBucketAccessLogging.js'),
        'cloudtrailBucketDelete'        : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailBucketDelete.js'),
        'cloudtrailEnabled'             : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailEnabled.js'),
        'cloudtrailEncryption'          : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailEncryption.js'),
        'cloudtrailFileValidation'      : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailFileValidation.js'),
        'cloudtrailToCloudwatch'        : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailToCloudwatch.js'),
        'cloudtrailBucketPrivate'       : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailBucketPrivate.js'),

        'configServiceEnabled'          : require(__dirname + '/plugins/aws/configservice/configServiceEnabled.js'),

        'dynamoKmsEncryption'           : require(__dirname + '/plugins/aws/dynamodb/dynamoKmsEncryption.js'),

        'defaultSecurityGroup'          : require(__dirname + '/plugins/aws/ec2/defaultSecurityGroup.js'),
        'elasticIpLimit'                : require(__dirname + '/plugins/aws/ec2/elasticIpLimit.js'),
        'subnetIpAvailability'          : require(__dirname + '/plugins/aws/ec2/subnetIpAvailability.js'),
        'excessiveSecurityGroups'       : require(__dirname + '/plugins/aws/ec2/excessiveSecurityGroups.js'),
        'instanceLimit'                 : require(__dirname + '/plugins/aws/ec2/instanceLimit.js'),
        'instanceMaxCount'              : require(__dirname + '/plugins/aws/ec2/instanceMaxCount.js'),
        'instanceKeyBasedLogin'         : require(__dirname + '/plugins/aws/ec2/instanceKeyBasedLogin.js'),
        'openAllPortsProtocols'         : require(__dirname + '/plugins/aws/ec2/openAllPortsProtocols.js'),
        'openCIFS'                      : require(__dirname + '/plugins/aws/ec2/openCIFS.js'),
        'openDNS'                       : require(__dirname + '/plugins/aws/ec2/openDNS.js'),
        'openFTP'                       : require(__dirname + '/plugins/aws/ec2/openFTP.js'),
        'openHadoopNameNode'            : require(__dirname + '/plugins/aws/ec2/openHadoopNameNode.js'),
        'openHadoopNameNodeWebUI'       : require(__dirname + '/plugins/aws/ec2/openHadoopNameNodeWebUI.js'),
        'openKibana'                    : require(__dirname + '/plugins/aws/ec2/openKibana.js'),
        'openMySQL'                     : require(__dirname + '/plugins/aws/ec2/openMySQL.js'),
        'openOracle'                    : require(__dirname + '/plugins/aws/ec2/openOracle.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/aws/ec2/openNetBIOS.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/aws/ec2/openPostgreSQL.js'),
        'openRDP'                       : require(__dirname + '/plugins/aws/ec2/openRDP.js'),
        'openRPC'                       : require(__dirname + '/plugins/aws/ec2/openRPC.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/aws/ec2/openSMBoTCP.js'),
        'openSMTP'                      : require(__dirname + '/plugins/aws/ec2/openSMTP.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/aws/ec2/openSQLServer.js'),
        'openSSH'                       : require(__dirname + '/plugins/aws/ec2/openSSH.js'),
        'openTelnet'                    : require(__dirname + '/plugins/aws/ec2/openTelnet.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/aws/ec2/openVNCClient.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/aws/ec2/openVNCServer.js'),
        'openElasticsearch'             : require(__dirname + '/plugins/aws/ec2/openElasticsearch.js'),
        'vpcElasticIpLimit'             : require(__dirname + '/plugins/aws/ec2/vpcElasticIpLimit.js'),
        'classicInstances'              : require(__dirname + '/plugins/aws/ec2/classicInstances.js'),
        'flowLogsEnabled'               : require(__dirname + '/plugins/aws/ec2/flowLogsEnabled.js'),
        'overlappingSecurityGroups'     : require(__dirname + '/plugins/aws/ec2/overlappingSecurityGroups.js'),
        'publicAmi'                     : require(__dirname + '/plugins/aws/ec2/publicAmi.js'),
        'instanceIamRole'               : require(__dirname + '/plugins/aws/ec2/instanceIamRole.js'),
        'ebsEncryptionEnabled'          : require(__dirname + '/plugins/aws/ec2/ebsEncryptionEnabled.js'),
        'natMultiAz'                    : require(__dirname + '/plugins/aws/ec2/natMultiAz.js'),
        'defaultVpcInUse'               : require(__dirname + '/plugins/aws/ec2/defaultVpcInUse.js'),
        'crossVpcPublicPrivate'         : require(__dirname + '/plugins/aws/ec2/crossVpcPublicPrivate.js'),
        'ebsEncryptedSnapshots'         : require(__dirname + '/plugins/aws/ec2/ebsEncryptedSnapshots.js'),

        'efsEncryptionEnabled'          : require(__dirname + '/plugins/aws/efs/efsEncryptionEnabled.js'),

        'ecrRepositoryPolicy'           : require(__dirname + '/plugins/aws/ecr/ecrRepositoryPolicy.js'),

        'eksKubernetesVersion'          : require(__dirname + '/plugins/aws/eks/eksKubernetesVersion.js'),
        'eksLoggingEnabled'             : require(__dirname + '/plugins/aws/eks/eksLoggingEnabled.js'),
        'eksPrivateEndpoint'            : require(__dirname + '/plugins/aws/eks/eksPrivateEndpoint.js'),
        'eksSecurityGroups'             : require(__dirname + '/plugins/aws/eks/eksSecurityGroups.js'),

        'insecureCiphers'               : require(__dirname + '/plugins/aws/elb/insecureCiphers.js'),
        'elbHttpsOnly'                  : require(__dirname + '/plugins/aws/elb/elbHttpsOnly.js'),
        'elbLoggingEnabled'             : require(__dirname + '/plugins/aws/elb/elbLoggingEnabled.js'),
        'elbNoInstances'                : require(__dirname + '/plugins/aws/elb/elbNoInstances.js'),

        'accessKeysExtra'               : require(__dirname + '/plugins/aws/iam/accessKeysExtra.js'),
        'accessKeysLastUsed'            : require(__dirname + '/plugins/aws/iam/accessKeysLastUsed.js'),
        'accessKeysRotated'             : require(__dirname + '/plugins/aws/iam/accessKeysRotated.js'),
        'certificateExpiry'             : require(__dirname + '/plugins/aws/iam/certificateExpiry.js'),
        'emptyGroups'                   : require(__dirname + '/plugins/aws/iam/emptyGroups.js'),
        'iamUserAdmins'                 : require(__dirname + '/plugins/aws/iam/iamUserAdmins.js'),
        'iamRolePolicies'               : require(__dirname + '/plugins/aws/iam/iamRolePolicies.js'),
        'maxPasswordAge'                : require(__dirname + '/plugins/aws/iam/maxPasswordAge.js'),
        'minPasswordLength'             : require(__dirname + '/plugins/aws/iam/minPasswordLength.js'),
        'noUserIamPolicies'             : require(__dirname + '/plugins/aws/iam/noUserIamPolicies.js'),
        'passwordExpiration'            : require(__dirname + '/plugins/aws/iam/passwordExpiration.js'),
        'passwordRequiresLowercase'     : require(__dirname + '/plugins/aws/iam/passwordRequiresLowercase.js'),
        'passwordRequiresNumbers'       : require(__dirname + '/plugins/aws/iam/passwordRequiresNumbers.js'),
        'passwordRequiresSymbols'       : require(__dirname + '/plugins/aws/iam/passwordRequiresSymbols.js'),
        'passwordRequiresUppercase'     : require(__dirname + '/plugins/aws/iam/passwordRequiresUppercase.js'),
        'passwordReusePrevention'       : require(__dirname + '/plugins/aws/iam/passwordReusePrevention.js'),
        'rootAccessKeys'                : require(__dirname + '/plugins/aws/iam/rootAccessKeys.js'),
        'rootAccountInUse'              : require(__dirname + '/plugins/aws/iam/rootAccountInUse.js'),
        'rootMfaEnabled'                : require(__dirname + '/plugins/aws/iam/rootMfaEnabled.js'),
        'sshKeysRotated'                : require(__dirname + '/plugins/aws/iam/sshKeysRotated.js'),
        'usersMfaEnabled'               : require(__dirname + '/plugins/aws/iam/usersMfaEnabled.js'),
        'usersPasswordLastUsed'         : require(__dirname + '/plugins/aws/iam/usersPasswordLastUsed.js'),
        'canaryKeysUsed'                : require(__dirname + '/plugins/aws/iam/canaryKeysUsed.js'),
        'kinesisEncrypted'              : require(__dirname + '/plugins/aws/kinesis/kinesisEncrypted.js'),
        'firehoseEncrypted'             : require(__dirname + '/plugins/aws/firehose/firehoseEncrypted.js'),
        'kmsKeyRotation'                : require(__dirname + '/plugins/aws/kms/kmsKeyRotation.js'),
        'kmsScheduledDeletion'          : require(__dirname + '/plugins/aws/kms/kmsScheduledDeletion.js'),
        'kmsKeyPolicy'                  : require(__dirname + '/plugins/aws/kms/kmsKeyPolicy.js'),
        'kmsDefaultKeyUsage'            : require(__dirname + '/plugins/aws/kms/kmsDefaultKeyUsage.js'),

        'rdsAutomatedBackups'           : require(__dirname + '/plugins/aws/rds/rdsAutomatedBackups.js'),
        'rdsEncryptionEnabled'          : require(__dirname + '/plugins/aws/rds/rdsEncryptionEnabled.js'),
        'rdsLoggingEnabled'             : require(__dirname + '/plugins/aws/rds/rdsLoggingEnabled.js'),
        'rdsPubliclyAccessible'         : require(__dirname + '/plugins/aws/rds/rdsPubliclyAccessible.js'),
        'rdsRestorable'                 : require(__dirname + '/plugins/aws/rds/rdsRestorable.js'),
        'rdsMultiAz'                    : require(__dirname + '/plugins/aws/rds/rdsMultiAz.js'),

        'domainAutoRenew'               : require(__dirname + '/plugins/aws/route53/domainAutoRenew.js'),
        'domainExpiry'                  : require(__dirname + '/plugins/aws/route53/domainExpiry.js'),
        'domainTransferLock'            : require(__dirname + '/plugins/aws/route53/domainTransferLock.js'),

        'bucketAllUsersPolicy'          : require(__dirname + '/plugins/aws/s3/bucketAllUsersPolicy.js'),
        'bucketAllUsersAcl'             : require(__dirname + '/plugins/aws/s3/bucketAllUsersAcl.js'),
        'bucketVersioning'              : require(__dirname + '/plugins/aws/s3/bucketVersioning.js'),
        'bucketLogging'                 : require(__dirname + '/plugins/aws/s3/bucketLogging.js'),

        'notebookDataEncrypted'         : require(__dirname + '/plugins/aws/sagemaker/notebookDataEncrypted.js'),
        'notebookDirectInternetAccess'  : require(__dirname + '/plugins/aws/sagemaker/notebookDirectInternetAccess.js'),

        'dkimEnabled'                   : require(__dirname + '/plugins/aws/ses/dkimEnabled.js'),

        'topicPolicies'                 : require(__dirname + '/plugins/aws/sns/topicPolicies.js'),
        'sqsCrossAccount'               : require(__dirname + '/plugins/aws/sqs/sqsCrossAccount.js'),
        'sqsEncrypted'                  : require(__dirname + '/plugins/aws/sqs/sqsEncrypted.js'),

        'ssmEncryptedParameters'        : require(__dirname + '/plugins/aws/ssm/ssmEncryptedParameters.js'),

        'lambdaOldRuntimes'             : require(__dirname + '/plugins/aws/lambda/lambdaOldRuntimes.js'),
        'lambdaVpcConfig'               : require(__dirname + '/plugins/aws/lambda/lambdaVpcConfig.js'),
        'lambdaPublicAccess'            : require(__dirname + '/plugins/aws/lambda/lambdaPublicAccess.js'),

        'monitoringMetrics'             : require(__dirname + '/plugins/aws/cloudwatchlogs/monitoringMetrics.js'),

        'redshiftEncryptionEnabled'     : require(__dirname + '/plugins/aws/redshift/redshiftEncryptionEnabled.js'),
        'redshiftPubliclyAccessible'    : require(__dirname + '/plugins/aws/redshift/redshiftPubliclyAccessible.js'),

        'transferLoggingEnabled'        : require(__dirname + '/plugins/aws/transfer/transferLoggingEnabled.js'),

        'shieldAdvancedEnabled'         : require(__dirname + '/plugins/aws/shield/shieldAdvancedEnabled.js'),
        'shieldEmergencyContacts'       : require(__dirname + '/plugins/aws/shield/shieldEmergencyContacts.js'),
        'shieldProtections'             : require(__dirname + '/plugins/aws/shield/shieldProtections.js')
    },
    azure : {
        'networkAccessDefaultAction'    : require(__dirname + '/plugins/azure/storageaccounts/networkAccessDefaultAction.js'),
        'storageAccountsHttps'          : require(__dirname + '/plugins/azure/storageaccounts/storageAccountsHttps.js'),
        'storageAccountsEncryption'     : require(__dirname + '/plugins/azure/storageaccounts/storageAccountsEncryption.js'),
        'logStorageEncryption'          : require(__dirname + '/plugins/azure/storageaccounts/logStorageEncryption.js'),
        'logContainerPublicAccess'      : require(__dirname + '/plugins/azure/storageaccounts/logContainerPublicAccess.js'),

        'keyExpirationEnabled'          : require(__dirname + '/plugins/azure/keyvaults/keyExpirationEnabled.js'),

        'blobContainersPrivateAccess'   : require(__dirname + '/plugins/azure/blobservice/blobContainersPrivateAccess.js'),
        'blobServiceImmutable'          : require(__dirname + '/plugins/azure/blobservice/blobServiceImmutable.js'),

        'fileServiceAllAccessAcl'       : require(__dirname + '/plugins/azure/fileservice/fileServiceAllAccessAcl.js'),
        'tableServiceAllAccessAcl'      : require(__dirname + '/plugins/azure/tableservice/tableServiceAllAccessAcl.js'),
        'queueServiceAllAccessAcl'      : require(__dirname + '/plugins/azure/queueservice/queueServiceAllAccessAcl.js'),

        'vmAgentEnabled'                : require(__dirname + '/plugins/azure/virtualmachines/vmAgentEnabled.js'),
        'vmDiskOSEncryption'            : require(__dirname + '/plugins/azure/virtualmachines/vmDiskOSEncryption.js'),
        'vmDiskDataEncryption'          : require(__dirname + '/plugins/azure/virtualmachines/vmDiskDataEncryption.js'),
        'vmEndpointProtection'          : require(__dirname + '/plugins/azure/virtualmachines/vmEndpointProtection.js'),
        'vmAutoUpdateEnabled'           : require(__dirname + '/plugins/azure/virtualmachines/vmAutoUpdateEnabled.js'),

        'nsgLogAnalyticsEnabled'        : require(__dirname + '/plugins/azure/monitor/nsgLogAnalyticsEnabled.js'),
        'logProfileArchiveData'         : require(__dirname + '/plugins/azure/monitor/logProfileArchiveData.js'),

        'sqlServerFirewallRuleEnabled'  : require(__dirname + '/plugins/azure/logalerts/sqlServerFirewallRuleEnabled.js'),
        'virtualNetworkRuleEnabled'     : require(__dirname + '/plugins/azure/logalerts/virtualNetworkRuleEnabled.js'),

        'monitorEndpointProtection'     : require(__dirname + '/plugins/azure/securitycenter/monitorEndpointProtection.js'),
        'monitorBlobEncryption'         : require(__dirname + '/plugins/azure/securitycenter/monitorBlobEncryption.js'),
        'monitorVMVulnerability'        : require(__dirname + '/plugins/azure/securitycenter/monitorVMVulnerability.js'),
        'monitorSQLEncryption'          : require(__dirname + '/plugins/azure/securitycenter/monitorSqlEncryption.js'),
        'monitorSQLAuditing'            : require(__dirname + '/plugins/azure/securitycenter/monitorSqlAuditing.js'),
        'monitorDiskEncryption'         : require(__dirname + '/plugins/azure/securitycenter/monitorDiskEncryption.js'),
        'appWhitelistingEnabled'        : require(__dirname + '/plugins/azure/securitycenter/appWhitelistingEnabled.js'),
        'securityConfigMonitoring'      : require(__dirname + '/plugins/azure/securitycenter/securityConfigMonitoring.js'),

        'resourceAllowedLocations'      : require(__dirname + '/plugins/azure/policyservice/resourceAllowedLocations.js'),
        'resourceLocationMatch'         : require(__dirname + '/plugins/azure/policyservice/resourceLocationMatch.js'),

        'enforceSSLConnection'          : require(__dirname + '/plugins/azure/mysqlserver/enforceSSLConnection.js'),

        'defaultSecurityGroup'          : require(__dirname + '/plugins/azure/networksecuritygroups/defaultSecurityGroup.js'),
        'openAllPorts'                  : require(__dirname + '/plugins/azure/networksecuritygroups/openAllPorts.js'),
        'openSMTP'                      : require(__dirname + '/plugins/azure/networksecuritygroups/openSMTP.js'),
        'openOracle'                    : require(__dirname + '/plugins/azure/networksecuritygroups/openOracle.js'),
        'openKibana'                    : require(__dirname + '/plugins/azure/networksecuritygroups/openKibana.js'),
        'openHadoopNameNode'            : require(__dirname + '/plugins/azure/networksecuritygroups/openHadoopNameNode.js'),
        'openHadoopNameNodeWebUI'       : require(__dirname + '/plugins/azure/networksecuritygroups/openHadoopNameNodeWebUI.js'),
        'openFTP'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openFTP.js'),
        'openSSH'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openSSH.js'),
        'openCIFS'                      : require(__dirname + '/plugins/azure/networksecuritygroups/openCIFS.js'),
        'openDNS'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openDNS.js'),
        'openRDP'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openRDP.js'),
        'openTelnet'                    : require(__dirname + '/plugins/azure/networksecuritygroups/openTelnet.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/azure/networksecuritygroups/openVNCServer.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/azure/networksecuritygroups/openVNCClient.js'),
        'openMySQL'                     : require(__dirname + '/plugins/azure/networksecuritygroups/openMySQL.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/azure/networksecuritygroups/openNetBIOS.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/azure/networksecuritygroups/openPostgreSQL.js'),
        'openRPC'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openRPC.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/azure/networksecuritygroups/openSMBoTCP.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/azure/networksecuritygroups/openSQLServer.js'),

        'tdeProtectorEncrypted'         : require(__dirname + '/plugins/azure/sqlserver/tdeProtectorEncrypted.js'),

        'pythonVersion'                 : require(__dirname + '/plugins/azure/appservice/pythonVersion.js'),
        'clientCertEnabled'             : require(__dirname + '/plugins/azure/appservice/clientCertEnabled.js'),
        'netFrameworkVersion'           : require(__dirname + '/plugins/azure/appservice/netFrameworkVersion.js'),
        'authEnabled'                   : require(__dirname + '/plugins/azure/appservice/authEnabled.js'),
        'identityEnabled'               : require(__dirname + '/plugins/azure/appservice/identityEnabled.js'),
        'http20Enabled'                 : require(__dirname + '/plugins/azure/appservice/http20Enabled.js'),
        'httpsOnlyEnabled'              : require(__dirname + '/plugins/azure/appservice/httpsOnlyEnabled.js'),

        'rbacEnabled'                   : require(__dirname + '/plugins/azure/kubernetesservice/rbacEnabled.js'),

        'endpointLoggingEnabled'        : require(__dirname + '/plugins/azure/cdnprofiles/endpointLoggingEnabled.js'),
        'detectInsecureCustomOrigin'    : require(__dirname + '/plugins/azure/cdnprofiles/detectInsecureCustomOrigin.js'),
    },
    github: {
        'publicKeysRotated'             : require(__dirname + '/plugins/github/users/publicKeysRotated.js'),
        'gpgKeysRotated'                : require(__dirname + '/plugins/github/users/gpgKeysRotated.js'),
        'userMfaEnabled'                : require(__dirname + '/plugins/github/users/userMfaEnabled.js'),
        'userPrivateEmails'             : require(__dirname + '/plugins/github/users/userPrivateEmails.js'),
        'orgPlanLimit'                  : require(__dirname + '/plugins/github/orgs/orgPlanLimit.js'),
        'orgDefaultPermission'          : require(__dirname + '/plugins/github/orgs/orgDefaultPermission.js'),
        'orgMfaRequired'                : require(__dirname + '/plugins/github/orgs/orgMfaRequired.js'),
        'orgExcessiveOwners'            : require(__dirname + '/plugins/github/orgs/orgExcessiveOwners.js'),
        'repoDeployKeysRotated'         : require(__dirname + '/plugins/github/repos/repoDeployKeysRotated.js'),
        'repoOutsideCollaborators'      : require(__dirname + '/plugins/github/repos/repoOutsideCollaborators.js')
    },
    oracle: {
        'openSSH'                       : require(__dirname + '/plugins/oracle/core/openSSH.js'),
        'openOracleAutoDataWarehouse'   : require(__dirname + '/plugins/oracle/core/openOracleAutoDataWarehouse.js'),
        'openAllPortsProtocols'         : require(__dirname + '/plugins/oracle/core/openAllPortsProtocols.js'),
        'openRPC'                       : require(__dirname + '/plugins/oracle/core/openRPC.js'),
        'openRDP'                       : require(__dirname + '/plugins/oracle/core/openRDP.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/oracle/core/openVNCServer.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/oracle/core/openVNCClient.js'),
        'openTelnet'                    : require(__dirname + '/plugins/oracle/core/openTelnet.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/oracle/core/openSMBoTCP.js'),
        'openOracle'                    : require(__dirname + '/plugins/oracle/core/openOracle.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/oracle/core/openPostgreSQL.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/oracle/core/openNetBIOS.js'),
        'openMySQL'                     : require(__dirname + '/plugins/oracle/core/openMySQL.js'),
        'openFTP'                       : require(__dirname + '/plugins/oracle/core/openFTP.js'),
        'openCIFS'                      : require(__dirname + '/plugins/oracle/core/openCIFS.js'),
        'openDNS'                       : require(__dirname + '/plugins/oracle/core/openDNS.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/oracle/core/openSQLServer.js'),
        'openHadoopNameNode'            : require(__dirname + '/plugins/oracle/core/openHadoopNameNode.js'),
        'openHadoopNameNodeWebUI'       : require(__dirname + '/plugins/oracle/core/openHadoopNameNodeWebUI.js'),
        'openKibana'                    : require(__dirname + '/plugins/oracle/core/openKibana.js'),
        'openSMTP'                      : require(__dirname + '/plugins/oracle/core/openSMTP.js'),

        'usersMfaEnabled'               : require(__dirname + '/plugins/oracle/identity/usersMfaEnabled.js'),
        'passwordRequiresLowercase'     : require(__dirname + '/plugins/oracle/identity/passwordRequiresLowercase.js'),
        'passwordRequiresNumbers'       : require(__dirname + '/plugins/oracle/identity/passwordRequiresNumbers.js'),
        'passwordRequiresSymbols'       : require(__dirname + '/plugins/oracle/identity/passwordRequiresSymbols.js'),
        'passwordRequiresUppercase'     : require(__dirname + '/plugins/oracle/identity/passwordRequiresUppercase.js'),
        'minPasswordLength'             : require(__dirname + '/plugins/oracle/identity/minPasswordLength.js'),
        'emptyGroups'                   : require(__dirname + '/plugins/oracle/identity/emptyGroups.js'),
        'excessivePolicies'             : require(__dirname + '/plugins/oracle/identity/excessivePolicies.js'),
        'excessivePolicyStatements'     : require(__dirname + '/plugins/oracle/identity/excessivePolicyStatements.js'),

        'defaultSecurityList'           : require(__dirname + '/plugins/oracle/networking/defaultSecurityList.js'),
        'lbHttpsOnly'                   : require(__dirname + '/plugins/oracle/networking/lbHttpsOnly.js'),
        'lbNoInstances'                 : require(__dirname + '/plugins/oracle/networking/lbNoInstances.js'),
        'wafPublicIpEnabled'            : require(__dirname + '/plugins/oracle/networking/wafPublicIpEnabled.js'),

        'bucketPublicAccessType'        : require(__dirname + '/plugins/oracle/objectstore/bucketPublicAccessType.js'),
        
        'nfsPublicAccess'               : require(__dirname + '/plugins/oracle/filestorage/nfsPublicAccess.js'),
    },
    google: {
        'excessiveFirewallRules'        : require(__dirname + '/plugins/google/vpcnetwork/excessiveFirewallRules.js'),
        'openDNS'                       : require(__dirname + '/plugins/google/vpcnetwork/openDNS.js'),
        'openSSH'                       : require(__dirname + '/plugins/google/vpcnetwork/openSSH.js'),
        'openCIFS'                      : require(__dirname + '/plugins/google/vpcnetwork/openCIFS.js'),
        'openAllPorts'                  : require(__dirname + '/plugins/google/vpcnetwork/openAllPorts.js'),
        'openFTP'                       : require(__dirname + '/plugins/google/vpcnetwork/openFTP.js'),
        'openHadoopNameNode'            : require(__dirname + '/plugins/google/vpcnetwork/openHadoopNameNode.js'),
        'openHadoopNameNodeWebUI'       : require(__dirname + '/plugins/google/vpcnetwork/openHadoopNameNodeWebUI.js'),
        'openKibana'                    : require(__dirname + '/plugins/google/vpcnetwork/openKibana.js'),
        'openMySQL'                     : require(__dirname + '/plugins/google/vpcnetwork/openMySQL.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/google/vpcnetwork/openNetBIOS.js'),
        'openOracle'                    : require(__dirname + '/plugins/google/vpcnetwork/openOracle.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/google/vpcnetwork/openPostgreSQL.js'),
        'openRDP'                       : require(__dirname + '/plugins/google/vpcnetwork/openRDP.js'),
        'openRPC'                       : require(__dirname + '/plugins/google/vpcnetwork/openRPC.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/google/vpcnetwork/openSMBoTCP.js'),
        'openSMTP'                      : require(__dirname + '/plugins/google/vpcnetwork/openSMTP.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/google/vpcnetwork/openSQLServer.js'),
        'openTelnet'                    : require(__dirname + '/plugins/google/vpcnetwork/openTelnet.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/google/vpcnetwork/openVNCClient.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/google/vpcnetwork/openVNCServer.js'),
        'openOracleAutoDataWarehouse'   : require(__dirname + '/plugins/google/vpcnetwork/openOracleAutoDataWarehouse.js'),
        'multipleSubnets'               : require(__dirname + '/plugins/google/vpcnetwork/multipleSubnets.js'),
        'defaultVpcInUse'               : require(__dirname + '/plugins/google/vpcnetwork/defaultVpcInUse.js'),

        'instanceMaxCount'              : require(__dirname + '/plugins/google/compute/instanceMaxCount.js'),
        'instancesMultiAz'              : require(__dirname + '/plugins/google/compute/instancesMultiAz.js'),

        'keyRotation'                   : require(__dirname + '/plugins/google/cryptographickeys/keyRotation.js'),

        'dbRestorable'                  : require(__dirname + '/plugins/google/sql/dbRestorable.js'),
        'dbAutomatedBackups'            : require(__dirname + '/plugins/google/sql/dbAutomatedBackups.js'),
        'dbMultiAz'                     : require(__dirname + '/plugins/google/sql/dbMultiAz.js'),
        'dbPubliclyAccessible'          : require(__dirname + '/plugins/google/sql/dbPubliclyAccessible.js'),

        'bucketVersioning'              : require(__dirname + '/plugins/google/storage/bucketVersioning.js'),
        'bucketLogging'                 : require(__dirname + '/plugins/google/storage/bucketLogging.js'),

        'clbHttpsOnly'                  : require(__dirname + '/plugins/google/clb/clbHttpsOnly.js'),
        'clbNoInstances'                : require(__dirname + '/plugins/google/clb/clbNoInstances.js'),
    }
};